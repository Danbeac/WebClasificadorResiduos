import { LoaderImageBase64Service } from './../../../../../../services/loader-image-base64/loader-image-base64.service';
import { Component, HostListener } from '@angular/core';
import { NotificationService } from '../../../../../../services';
import { convertFileToBase64String } from '../../../../../../shared';

@Component({
  selector: 'app-form-image',
  templateUrl: './form-image.component.html',
  styleUrl: './form-image.component.scss'
})

export class FormImageComponent {

  outputBoxVisible: boolean;
  extsEnableArr: string[] = ['jpeg', 'jpg', 'png'];
  stringImageBase64: string;
  mbsEnable: number = 5;
  enableToProcess: boolean = false;
  showImages: boolean = true;

  constructor(private notificationService: NotificationService,
              private loaderImageBase64Service: LoaderImageBase64Service
  ) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  ngOnInit() {
    this.loadDefaultImage();
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.showImages = window.innerWidth > 1400;
  }

  loadDefaultImage() {
    this.loaderImageBase64Service.convertirImagenABase64('./assets/img/prev.jpg')
    .then((base64) => {
      base64 = base64.replace('data:image/jpeg;base64,', '');
      this.stringImageBase64 = base64;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onFileSelected(event: any, inputFile: File | null) {
    this.outputBoxVisible = false;
    var files = event.target.files;

    for (let index = 0; index < files.length; index++) {
      const file = files[index];

      this.outputBoxVisible = true;

      if(this.validateEnableExtension(file.name)){
        if(this.validateSizeFileEnable(file.size)){
          convertFileToBase64String(file).subscribe({
            next: (stringBase64) => {
              this.stringImageBase64 = stringBase64;
              this.enableToProcess = true;
            }
          })
        } else {
          this.notificationService.error(`El tamaño del archivo no es permitido. Tamaño máximo permitido (${this.mbsEnable} MB)`);
        }
      } else {
        this.notificationService.error(`La extensión del archivo no es permitida.`);
      }
    }
  }

  validateEnableExtension(name: string) : boolean {
    let isValid = false;

    for (let index = 0; index < this.extsEnableArr.length; index++) {
      const ext = this.extsEnableArr[index];
      if(name.toLocaleLowerCase().trim().includes(ext.toLocaleLowerCase().trim())){
        isValid = true;
        break;
      }
    }

    return isValid;
  }

  validateSizeFileEnable(size: any) {
    let megaByte = 1e+6;
    if(size > (megaByte * this.mbsEnable)) {
      return false;
    } else {
      return true;
    }
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      const file: File = event.dataTransfer.files[0];
      this.onFileSelected(event, event.dataTransfer.files[0]);
    }
  }

  useCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();

        const captureButton = document.createElement('button');
        captureButton.innerText = 'Tomar Foto';
        captureButton.className = 'capture-button'; // Agrega una clase al botón
        captureButton.onclick = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          this.stringImageBase64 = canvas.toDataURL('image/jpeg').replace('data:image/jpeg;base64,', '');
          video.pause();
          stream.getTracks().forEach(track => track.stop());
          document.getElementById('cameraContainer').style.display = 'none';
          document.getElementById('cameraContainer').removeChild(video);
          document.getElementById('cameraContainer').removeChild(captureButton);
        };

        const cameraContainer = document.getElementById('cameraContainer');
        cameraContainer.style.display = 'flex';
        cameraContainer.appendChild(video);
        cameraContainer.appendChild(captureButton);
      })
      .catch((error) => {
        console.error('Error accessing camera: ', error);
      });
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderImageBase64Service {

  constructor() { }

  convertirImagenABase64(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = function () {
        reject('Error al cargar la imagen.');
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    });
  }
}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { NotificationComponent } from './components';
import { generateStringMessages } from '../../shared';

@Injectable()
export class NotificationService {

    constructor(private snackBar: MatSnackBar) { }

    error(message: string): void {
        this.snackBar.openFromComponent(NotificationComponent, {
            duration: 3000,
            data: { message },
            panelClass: ['mat-snackbar_error']
        });
    }

    success(message: string): void {
        this.snackBar.openFromComponent(NotificationComponent, {
            duration: 3000,
            data: { message },
            panelClass: ['mat-snackbar_success']
        });
    }

    validationMessages(messages: string[]): void {
        let message = generateStringMessages(messages);
        
        this.snackBar.openFromComponent(NotificationComponent, {
            duration: 5000,
            data: { message },
            panelClass: ['mat-snackbar_validations'],
            horizontalPosition: 'right',
            verticalPosition: 'bottom'
        });
    }

    confirm(message?: string): Observable<boolean> {
        const response = Swal.fire({
            title: message,
            showDenyButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: "#001753",
            denyButtonText: 'No',
            customClass: {
                popup: 'swal-size'
            },
        }).then((result) => {
            if (result.isConfirmed) {
                return true;
            } else {
                return false;
            }
        });

        return from(response);
    };
}

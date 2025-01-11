import { DatePipe } from "@angular/common";
import { Observable, Subject } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { ControlItem } from "../../models/frontend";

export function transformControlItem(item, label, value): ControlItem {
    const controlItem: ControlItem = { label: item[label], value: item[value] }
    return controlItem;
}

export function transformControlItemObject(item, label): ControlItem {
    const controlItem: ControlItem = { label: item[label], value: item }
    return controlItem;
}

export function calculateAgeByDate(birthDate: Date) {
    const today: Date = new Date();
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export function convertFileToBase64String(file) : Observable<string> {
    const obs = new Subject<string>();

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
        let base64string = cleanBase64String(reader.result.toString());
        obs.next(base64string);
        obs.complete();
    };

    return obs.asObservable();
}

export function cleanBase64String(base64String: string) {
    let index = base64String.indexOf('base64,');
    index = index + 'base64,'.length;

    let lastPosition = base64String.length;

    return base64String.substring(index, lastPosition);
}

export function formatDate(date: Date, formatString: string) {
    var pipe = new DatePipe('en-US');
    return pipe.transform(date, formatString)
}

export function createHeaders(userId: string) {
    let headers = new HttpHeaders();
    headers = headers.append('UserId',userId);
    return {'headers':headers};
}
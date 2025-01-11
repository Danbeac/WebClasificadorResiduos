const requiredMessagesConfigured = [
  { ControlName: 'default', Message: '{0} es requerido' },
  { ControlName: 'idMacroRegion', Message: 'La macro región es requerida' },
  { ControlName: 'idDefensoriaRegional', Message: 'La defensoria regional es requerida' },
  { ControlName: 'esRegistroPersonas', Message: 'El tipo registro es requerido' },
  { ControlName: 'sectoresSociales', Message: 'Sector social es requerido' },
  { ControlName: 'amenaza', Message: 'Amenaza es requerido' },
  { ControlName: 'esHomicidio', Message: 'Homicidio es requerido' },
  { ControlName: 'esAtentando', Message: 'Atentado es requerido' },
  { ControlName: 'amenazas', Message: 'Tipo de amenazas es requerido' },
  { ControlName: 'otrasConductas', Message: 'Otras conductas es requerido' },
  { ControlName: 'fuerzasPublicas', Message: 'Fuerzas públicas es requerido' },
  { ControlName: 'actoresArmados', Message: 'Actores armados es requerido' },
  { ControlName: 'gruposArmados', Message: 'Grupos armados es requerido' },
  { ControlName: 'detalleEstructura', Message: 'Detalle estructura es requerido' },
  { ControlName: 'conductasDenunciadasPreviamente', Message: 'Conductas denunciadas previamente es requerido' },
  { ControlName: 'conductasDenunciadas', Message: 'Conductas denunciadas es requerido' },
  { ControlName: 'detalleDenunciaPreviamente', Message: 'Detalle conductas denunciadas es requerido' },
  { ControlName: 'infoMedidaProteccion', Message: 'La información de medidas de protección es requerida' },
  { ControlName: 'infoVerificacion', Message: 'La información de verificación es requerida' },
  { ControlName: 'idTipoDocumento', Message: 'Tipo de documento es requerido' },
  { ControlName: 'idEtnia', Message: 'Etnia es requerido' },
  { ControlName: 'idSexo', Message: 'Sexo es requerido' },
]

export const exportRequiredMessagesFromFormGroup = (formGroup) => {

  let requiredMessages = [];

  Object.keys(formGroup.controls).forEach(field => {

    const control = formGroup.get(field);

    // Para formGroups Anidados
    if (control.controls){
      let requiredMessagesNested = exportRequiredMessagesFromFormGroup(control);
      requiredMessages = requiredMessages.concat(requiredMessagesNested);
    }
    else{
      if (control.errors && control.errors['required']) {
        const controlName = (Object.keys(control.parent.controls).find(key => control.parent.controls[key] === control));
  
        let messagesConfigured = requiredMessagesConfigured.find(x => x.ControlName === controlName);
  
        if (!messagesConfigured) {
          let messagesDefaultConfigured = requiredMessagesConfigured.find(x => x.ControlName === 'default');
          let messagesDefault = messagesDefaultConfigured.Message.replace('{0}', controlName);
  
          requiredMessages.push(messagesDefault);
        } else {
          requiredMessages.push(messagesConfigured.Message);
        }
      }
    }
  });
  
  return requiredMessages;
};


export const generateStringMessages = (messages) => {
  let maxMessages = 10;
  let message = '<ul>';

  messages.forEach(x => {

    if (messages.indexOf(x) + 1 > maxMessages)
      return;

    if (messages.indexOf(x) != 0)
      message += '<br>';

    message += '<li>';
    message += x;
    message += '</li>';
  })

  message += '<ul>';

  return message;
}
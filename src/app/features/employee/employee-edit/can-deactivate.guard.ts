import { CanDeactivateFn } from "@angular/router";
import { EmployeeEditComponent } from "./employee-edit.component";

export const canDeactiveEditEmployeeComponent: CanDeactivateFn<EmployeeEditComponent> = (
  component: EmployeeEditComponent
) => {
  if(component.isFormChanged()) {
    return confirm('You have unsaved changes! Do you really want to leave?');
  }

  return true;
}

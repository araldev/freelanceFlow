import { useId, type ComponentPropsWithRef } from 'react'
import { ClientState } from '../schemes/ClientState'
import type { ProjectState } from '../schemes/ProjectState'
import type { InvoiceState } from '../schemes/InvoiceState'

export enum TypeFilter {
  projects = 'projects',
  invoices = 'invoices',
  client = 'client'
}

// 1. Mantenemos tu mapa de tipos (asegúrate de que ProjectState e InvoiceState sean enums o tipos de objeto)
type FilterValues = {
  [TypeFilter.projects]: keyof typeof ProjectState | 'All';
  [TypeFilter.invoices]: keyof typeof InvoiceState | 'All';
  [TypeFilter.client]: keyof typeof ClientState | 'All';
};

// 2. Definimos las props de forma genérica
type TagFilterProps<T extends TypeFilter> = Omit<ComponentPropsWithRef<'label'>, 'children'> & {
  type: `${T}`; // Usar template strigns para que me detecte strings en el autocompletado y no el enum
  text: FilterValues[T]; // Aquí se hace el vínculo dinámico
};

// 3. Aplicamos el genérico a la función
export function TagFilter<T extends TypeFilter>({ type, className, text, ref, ...props }: TagFilterProps<T>) {
  const inputId = useId()
  const value = String(text).toLowerCase()
  const labelText = text === ClientState.OnHold ? 'On Hold' : text

  return (
    <label className={`shadow-md relative min-w-fit z-0 p-2 w-20 text-center bg-background text-foreground rounded-4xl has-checked:bg-primary has-checked:text-primary-foreground has-focus-visible:ring-2 has-focus-visible:ring-offset-2 has-focus-visible:ring-primary ${className}`} ref={ref} htmlFor={inputId} {...props}>{labelText}
      <input id={inputId} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer " value={value} type="checkbox" />
    </label>
  )
}
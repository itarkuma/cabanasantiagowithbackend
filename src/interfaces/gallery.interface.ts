
export interface Gallery {
  id: number;
  title: string;
  subtitle: string;
  portada?: string;
  typo: ValidServicios;
}

export type ValidServicios = 'servicios' | 'proyectos';
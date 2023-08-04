export interface RouteType {
  path: string;
  name: ReactNode;
	hidden?:boolean;
  icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>>>;
  children?: RouteType[];
}
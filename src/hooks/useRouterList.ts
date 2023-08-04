import routes from "@/routes";

/**
 * 可以在routes自定义一些属性，做一些操作
 * @returns
 */
export default function useRouterList(){
  return routes.filter((route)=>!route.hidden);
}
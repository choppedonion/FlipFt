import { HttpInterceptorFn } from '@angular/common/http';

export const authHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  const token = "4eddaff1-7de8-44af-95e6-753370257f2b";

  const modifiedReq = req.clone({
    setHeaders: {
      "pe-nom-application":"FlipFt",
      "pe-id-correlation":"45",
      "pe-id-utilisateur":"test",
      "TypeAuth":"/agent",
      "Authorization": `Bearer ${token}`
    }
  });

  return next(modifiedReq);
};

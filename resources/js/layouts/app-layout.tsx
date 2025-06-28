import { Toaster } from '@/components/ui/sonner';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { useEffect, type ReactNode } from 'react';
import { toast } from 'sonner';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

interface AppLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}


export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
  const { flash } = usePage<SharedData>().props;

  useEffect(() => {
    if(flash.success) toast.success(flash.success);
    if(flash.error) toast.error(flash.error);
    if(flash.info) toast.info(flash.info);
  }, []);

  return (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
      {children}
      <Toaster position='top-right' richColors={flash.error ? true : false}/>
    </AppLayoutTemplate>
  );
};

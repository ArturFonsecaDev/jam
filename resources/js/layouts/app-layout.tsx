import { Toaster } from '@/components/ui/sonner';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { useEffect, type ReactNode } from 'react';
import { toast } from 'sonner';
import { usePage } from '@inertiajs/react';

interface AppLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
  const { flash } = usePage().props;

  useEffect(() => {
    if(flash.success) return toast.success(flash.success);
    if(flash.error) return toast.error(flash.error);
    if(flash.info) return toast.info(flash.info);
  }, []);

  return (
    <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
      {children}
      <Toaster position='top-right'/>
    </AppLayoutTemplate>
  );
};

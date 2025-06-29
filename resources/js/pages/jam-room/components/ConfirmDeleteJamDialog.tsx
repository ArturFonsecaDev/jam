import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { router } from '@inertiajs/react';
import { useState } from 'react';

interface DestroyJamDialogProps {
  jamRoomId: number;
}

export function DestroyJamDialog(DestroyJamDialogProps: DestroyJamDialogProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const handleClick = () => {
    if (isDeleting) return; 

    setIsDeleting(true);

    router.delete(route('jam-room.destroy', DestroyJamDialogProps.jamRoomId), {
      preserveScroll: true,
      onSuccess: () => {
        console.log('Jam deletada com sucesso!');
        setOpen(false);
        setIsDeleting(false);
      },
      onError: (errors) => {
        console.error('Erro ao deletar a Jam:', errors);
        setIsDeleting(false);
      },
      onFinish: () => {
        setIsDeleting(false);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="inline-flex items-center gap-3 rounded-full bg-red-500 hover:bg-red-600">Deletar Jam</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-500">Deletar Jam</DialogTitle>
        </DialogHeader>
        <DialogDescription>Tem certeza que deseja deletar esta Jam? Esta ação não pode ser desfeita.</DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleClick} disabled={isDeleting} className="bg-red-500 hover:bg-red-600 disabled:opacity-50">
            {isDeleting ? 'Deletando...' : 'Deletar'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

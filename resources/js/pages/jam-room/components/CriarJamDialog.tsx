import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';

export function CriarJamDialog() {
  const [open, setOpen] = useState(false);
  const { data, setData, post, processing, errors } = useForm({
    name: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    post(route('jam-room.store'), {
      onSuccess: () => {
        setData({ name: '' });
        setOpen(false);
      },
      onError: (errors) => {
        console.error(errors);
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="inline-flex transform items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-6 text-xl font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl">
          Criar Jam
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <DialogHeader>
            <DialogTitle>Criar Jam</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Input
                value={data.name}
                onChange={(event) => setData('name', event.target.value)}
                placeholder="Digite o nome da sua jam..."
                autoFocus
                required
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancelar</Button>
            </DialogClose>
            <Button 
              type="submit" 
              disabled={processing}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
            >
              {processing ? 'Criando...' : 'Criar Jam'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

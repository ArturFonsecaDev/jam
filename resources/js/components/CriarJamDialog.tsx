import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CriarJamDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="inline-flex transform items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-6 text-xl font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl">
            Criar Jam
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Criar Jam</DialogTitle>
            <DialogDescription>
              Defina o nome da sua jam musical. Clique em criar quando estiver pronto.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="nome-jam">Nome da Jam</Label>
              <Input 
                id="nome-jam" 
                name="nomeJam" 
                placeholder="Digite o nome da sua jam..." 
                autoFocus
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Criar Jam
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
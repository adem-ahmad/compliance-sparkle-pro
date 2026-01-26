import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface CalendlyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CALENDLY_URL = "https://calendly.com/av-assistas/audit-de-ton-business";

const CalendlyModal = ({ open, onOpenChange }: CalendlyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[85vh] p-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Réserver un appel découverte</DialogTitle>
        </VisuallyHidden>
        <iframe
          src={CALENDLY_URL}
          className="w-full h-full border-0"
          title="Calendly - Réserver un appel"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;

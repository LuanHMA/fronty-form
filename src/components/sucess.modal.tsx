"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Check, Confetti } from "@phosphor-icons/react";

export function SuccessModal({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] h-screen w-screen bg-neutral-800 px-6 opacity-65 blur-md" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[100] w-[24rem] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl border border-neutral-100 bg-white px-10 pb-10 pt-14 ">
          <Dialog.Title>
            <header className="relative flex items-start justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500 shadow-[0px_0px_0px_8px_#17B6860F]">
                <Check size={32} weight="bold" className="text-white" />
              </div>
            </header>
          </Dialog.Title>
          <Dialog.Description className="mt-8 flex flex-col gap-10 text-center">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-center text-2xl font-bold text-neutral-800">
                Orçamento enviado com sucesso!
              </h2>
              <p className="text-center text-base text-neutral-600 ">
                Agradecemos seu contato! Um de nossos representantes entrará em
                contato em breve.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="w-full p-4 bg-emerald-500 rounded-lg text-white font-bold" onClick={onClose}>
                Ok
              </button>
            </div>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

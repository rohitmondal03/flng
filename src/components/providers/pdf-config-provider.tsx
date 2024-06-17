// PROVIDER FOR "react-pdf"

"use client"

import { pdfjs } from "react-pdf"
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import type { TLayoutProps } from '@/lib/@types/root.types'


export function PDFConfigProvider({ children }: TLayoutProps) {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

  return (
    <>{children}</>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ModelSwitch() {
  const [model, setModel] = useState<'gpt-4o' | 'gpt-4o-mini'>('gpt-4o-mini')
  const router = useRouter()

  useEffect(() => {
    const storedModel = localStorage.getItem('aiModel') as 'gpt-4o' | 'gpt-4o-mini' | null
    if (storedModel) {
      setModel(storedModel)
    }
  }, [])

  const handleModelChange = (value: string) => {
    const newModel = value as 'gpt-4o' | 'gpt-4o-mini'
    setModel(newModel)
    localStorage.setItem('aiModel', newModel)
    router.refresh()
  }

  return (
    <Select onValueChange={handleModelChange} value={model}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a model" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gpt-4o-mini">GPT-4o-mini</SelectItem>
        <SelectItem value="gpt-4o">GPT-4o</SelectItem>
      </SelectContent>
    </Select>
  )
}
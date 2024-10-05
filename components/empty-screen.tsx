import React from 'react'

import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

interface EmptyScreenProps {
  setInput: React.Dispatch<React.SetStateAction<string>>
}

export function EmptyScreen({ setInput }: EmptyScreenProps) {
  return <div className="mx-auto max-w-2xl px-4"></div>
}

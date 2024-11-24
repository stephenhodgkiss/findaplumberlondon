import Image, { ImageProps } from 'next/image'
import { forwardRef } from 'react'

type SafeImageProps = Omit<ImageProps, 'loading'> & {
  eager?: boolean
}

const SafeImage = forwardRef<any, SafeImageProps>(({ eager, ...props }, ref) => {
  const safeProps = {
    ...props,
    priority: eager || false,
    quality: props.quality || 75,
    sizes: props.sizes || '100vw'
  } as ImageProps

  return <Image ref={ref} {...safeProps} />
})

SafeImage.displayName = 'SafeImage'

export default SafeImage
import {cn} from '@/utils'
import React from 'react'

type ContainerProps = React.ComponentPropsWithoutRef<'div'>;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    function ContainerComponent({className, children, ...props}: ContainerProps, ref) {
        return (
            <div
                ref={ref}
                className={cn('relative py-8 px-4 sm:px-8 lg:px-12 w-auto h-auto', className)}
                {...props}
            >
                <div
                    className={'absolute w-full h-full bg-white dark:bg-black -z-20 left-0 top-0 opacity-40 rounded-2xl'}></div>
                {children}
            </div>
        );
    }
)

export {Container}

// const OuterContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
//     function OuterContainer({className, children, ...props}, ref) {
//         return (
//             <div style={{border: '1px solid blue'}} ref={ref} className={cn('sm:px-8', className)} {...props}>
//                 <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
//             </div>
//         );
//     }
// );
//
// const InnerContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
//     function InnerContainer(
//         {className, children, ...props}: ContainerProps,
//         ref
//     ) {
//         return (
//             <div
//                 ref={ref}
//                 style={{border: '1px solid red'}}
//                 className={cn('relative px-4 sm:px-8 lg:px-12', className)}
//                 {...props}
//             >
//                 <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
//             </div>
//         );
//     }
// );
//
// const ContainerComponent = React.forwardRef<HTMLDivElement, ContainerProps>(
//     function Container({children, ...props}: ContainerProps, ref) {
//         return (
//             <OuterContainer ref={ref} {...props}>
//                 <InnerContainer>{children}</InnerContainer>
//             </OuterContainer>
//         );
//     }
// );
// /**
//  * 基础布局组件
//  */
// export const Container = Object.assign(ContainerComponent, {
//     Outer: OuterContainer,
//     Inner: InnerContainer
// });

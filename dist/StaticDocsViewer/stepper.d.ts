export interface StepperConfig {
    start?: number;
    stiffness?: number;
    damping?: number;
    onStep: (value: number) => void;
}
export declare class Stepper {
    stiffness: number;
    damping: number;
    current: number;
    target: number;
    velocity: number;
    onStep: (value: number, stepper: Stepper) => void;
    paused: boolean;
    protected _animationFrameID: number | null;
    protected _loopTimestamp: number;
    constructor(config: StepperConfig);
    stepTo(target: number, start?: number): void;
    pause(): void;
    destroy(): void;
    protected looper: (timestamp: number) => void;
    protected stepper(): void;
}

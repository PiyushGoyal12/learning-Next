"use client";

// import { useRouter } from "next/router";
import { startTransition } from "react";

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    // const router = useRouter();
    const reload = () => {
        startTransition(() => {
            // router.reload(); //refresh is not workiing dont know why
            reset();
        });
    };
    return (
        <>
            <div>{error.message}</div>
            <button
                onClick={() => {
                    reload();
                }}
            >
                Try Again
            </button>
            <p>
                dont know why above button is not working try to reload the page
                will fix it soon
            </p>
        </>
    );
}
// if you move this file to products folder then entire children product will rerender removing features products form our page
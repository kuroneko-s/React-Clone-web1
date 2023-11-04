import React from 'react'

export default function fallbackRender({error, resetErrorBoundrary}: { error: any; resetErrorBoundrary: any; }) {
    return (
        <div role={"alert"}>
            <p>wrong</p>
            <pre style={{color: "red"}}>{error.message}</pre>
        </div>
    )
}
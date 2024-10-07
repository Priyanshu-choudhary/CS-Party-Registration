import React from 'react'

function NeonCard() {
    return (
        <div>

            <section class="container-1">
            <div class="card-container">
    <div class="card-content">
        <div class="card-title">
            <span class="title">Dress Code</span>
        </div>
        <div class="card-body">
            <div class="svg-card flex-none">
                <p>Junior :</p>
            </div>
            <ul class="dress-code-list">
                <li class="text-white font-thin bg-slate-700 px-2 rounded-sm"><span className='font-semibold'>Girls:</span> Anything(not western)</li>
                <li class="text-white font-thin bg-slate-700 px-2 rounded-sm"><span className='font-semibold'>Boys:</span> Party wear</li>
            </ul>
            <div class="svg-card flex-none">
                <p>Senior :</p>
            </div>
            <ul class="dress-code-list">
                <li class="text-white font-thin bg-slate-700 px-2 rounded-sm"><span className='font-semibold'>Girls:</span> Saree</li>
                <li class="text-white font-thin bg-slate-700 px-2 rounded-sm"><span className='font-semibold'>Boys:</span> Formals</li>
            </ul>
        </div>
        <div class="card-footer">
            <span class="title bg-red-900 text-white px-2 rounded-sm">Note: Jr. don't dress like seniors</span>
        </div>
    </div>
</div>

            </section>
        </div>
    )
}

export default NeonCard

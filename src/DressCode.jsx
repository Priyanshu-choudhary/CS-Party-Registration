import React from 'react'

function DressCode() {
  return (
    <div>
      <div class="card">
  <div class="titlebar">
    <span class="buttons">
    <button class="minimize">
			<svg x="0px" y="0px" viewBox="0 0 10.2 1"><rect x="0" y="50%" width="10.2" height="1"></rect></svg>
		</button>
    <button class="maximize">
			<svg viewBox="0 0 10 10"><path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path></svg>
		</button>
    <button class="close">
			<svg viewBox="0 0 10 10"><polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"></polygon></svg>
		</button>
    </span>
  </div>
  <div class="cppcode">
    <pre id="pre"><code><span class="s1">#include</span> <span class="s2">&lt;iostream&gt;</span>
using<span class="s3"> namespace </span>std<span class="sc">;</span>

<span class="s3">int</span> <span class="s2">main()</span> <span class="curlies">{</span>

  <span class="s3">int</span> <span class="s4">a</span> <span class="operator">=</span> 12<span class="sc">;</span>
  <span class="s3">int</span> <span class="s4">b</span> <span class="operator">=</span> 5<span class="sc">;</span>

  <span class="s4">cout</span> <span class="s5">&lt;&lt;</span> <span class="s1">"Sum of the numbers
    is: "</span> <span class="s5">&lt;&lt;</span> <span class="rounds">(</span><span class="s4">a </span><span class="operator">+</span><span class="s4"> b</span><span class="rounds">)</span><span class="sc">;</span>

  <span class="s6">return</span> 0<span class="sc">;</span>

<span class="curlies">}</span>
    </code></pre>
  </div>
</div>

    </div>
  )
}

export default DressCode

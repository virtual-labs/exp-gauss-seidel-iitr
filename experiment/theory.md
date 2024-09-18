
<div style="font-family: 'Nunito Sans', sans-serif; font-size: 20px;text-align: justify;">
<h2>Introduction</h2>
The power flow analysis, also known as load flow analysis, is essential for determining the steady-state operating conditions of a power system. It involves calculating the steady-state active (P) and reactive (Q) powers, voltage magnitude (V), and the angle (\delta) at each bus of the system. In general, only two of them are known and other two remain unknown at a bus. Based on these steady-state known and unknown quantities, each bus in the power system are classified as load bus (or PQ bus), generator bus (or PV bus), and slack bus (or reference bus). The known and unknown quantities of these buses are listed below -<br> 

###  1.	Bus Type – 

| Bus Type                | Explanation                                                                                                      | Known        | Unknown       |
|-------------------------|---------------------------------------------------------------------------------------------------------------------|------------------|-------------------|
| Load bus or PQ bus      | A bus connected only to loads, i.e., P and Q, are known as a load bus. Generally, P and Q are specified for such type of buses. | P and Q      | V and $\delta$ |
| Generator bus or PV bus | A bus connected to a generator is known as a generator bus. In general, P and V of such buses are known. A generator can maintain the voltage on a bus till its reactive power capability which is important for this bus to continue to operate as a PV bus. | P and V      | Q and $\delta$  |
| Slack or reference bus  | One bus in a system is specified as a slack bus whose V and \(\delta\) are specified and P and Q are calculated. Here, please note that P is unknown for this bus which takes care of the mismatch in the generation and losses. Generally, the largest generator in the system is considered as the slack bus. | V and $\delta$ | P and Q        |


###  2. Power Flow Equations – 

<br>

$$
\begin{equation}
    

\begin{bmatrix}
I_{1}
\\ I_{2}
\\ \vdots 
\\ I_{i}
\\ \vdots 
\\ I_{n}
\end{bmatrix}\\

=\begin{bmatrix}
 Y_{11}&   Y_{12}&   \cdots &   Y_{1i}&   \cdots &  Y_{1n}\\ 
 Y_{21}&   Y_{22}&   \cdots &   Y_{2i}&   \cdots &  Y_{2n}\\ 
\vdots&   \vdots&   \vdots &   \vdots&   \vdots &  \vdots \\ 
 Y_{i1}&   Y_{i2}&   \cdots &   Y_{ii}&   \cdots &  Y_{in}\\ 
\vdots&   \vdots&   \vdots &   \vdots&   \vdots &  \vdots \\ 
 Y_{n1}&   Y_{n2}&   \cdots &   Y_{ni}&   \cdots &  Y_{nn} 
\end{bmatrix} 

\begin{bmatrix}
V_{1}
\\ V_{2}
\\ \vdots 
\\ V_{i}
\\ \vdots 
\\ V_{n}
\end{bmatrix}
\end{equation}
$$

<br>

$$
\begin{aligned}
    I_{bus} = Y_{bus}V_{bus}
\end{aligned}
$$

Where, $I_{bus}$  is the vector of the injected bus currents and $V_{bus}$ is the vector of bus voltages measured from the reference node. $Y_{bus}$ is known as the bus admittance matrix.

For each bus $i$ :

$$
\begin{equation}
    I_{i} = \sum_{j=1}^{n} Y_{ij} V_{j} = Y_{ii} V_{i} + \sum_{j=1, j \neq i}^{n} Y_{ij} V_{j}
\end{equation}
$$

Complex power injection at bus $i$ is given by, $S_{i}=P_{i}+jQ_{i}=V_{i}I_{i}^{*}$ . Inserting (2) and separating real and imaginary terms, the power flow equations for active power and reactive power are obtained and given in (3) and (4). 

<br>

$$
\begin{equation}
    P_{i}=\sum_{j=1}^{n}|V_{i}||V_{j}||Y_{ij}|cos(\theta_{ij}+\delta_{j}-\delta_{i})
\end{equation}
$$
$$
\begin{equation}
    Q_{i}=-\sum_{j=1}^{n}|V_{i}||V_{j}||Y_{ij}|sin(\theta_{ij}+\delta_{j}-\delta_{i})
\end{equation}
$$

Where,  $|V_{i}|$ and $\delta_{i}$ are the voltage magnitude and angle at bus $i$, and $|Y_{i}|$  and $\theta_{ij}$ are the magnitude and angle of the admittance matrix corresponding to the element at $i^{th}$ row and $j^{th}$ column. For a $‘n’$ bus system, there are total $‘2n’$ load flow equations and $‘2n’$ variables. 


<br>

## Gauss-Seidel method for power flow analysis – 
The Gauss-Seidel method is an iterative technique used to solve nonlinear algebraic equations. The Gauss-Seidel method iteratively updates the voltage at each bus using the latest updated values from the previous steps. Here’s the general procedure for a Gauss-Seidel method: 

$$
\begin{aligned}
    I_{i} = \sum_{j=1}^{n} Y_{ij} V_{j} = Y_{ii} V_{i} + \sum_{j=1, j \neq i}^{n} Y_{ij} V_{j}
\end{aligned}
$$

By rearranging the above equation, we get, 

$$
\begin{aligned}
V_{i}=\frac{1}{Y_{ii}}\Big(I_{i}-\sum_{j=1, j \neq i}^{n} Y_{ij}V_{j}\Big)\end{aligned}
$$

Also, from $S_{i}=P_{i}+jQ_{i}=V_{i}I_{i}^{*}$, $I_{i}$ in the above equation can be replaced by $I_{i} = \frac{P_{i}-jQ_{i}}{V_{i}^{*}}$ . 

<br>

Rewriting the above equation by replacing $I_{i}$ as,

$$
\begin{aligned}
V_{i}=\frac{1}{Y_{ii}}\Big(\frac{P_{i}-jQ_{i}}{V_{i}^{*}}-\sum_{j=1, j \neq i}^{n} Y_{ij}V_{j}\Big)\end{aligned}
$$

To perform the power flow analysis, an initial guess for the bus voltage magnitude is required. For the normal steady-state operating conditions, the bus voltage magnitudes maintain between 0.95 – 1.05 p.u. Therefore, all the unknown bus voltages are initialized at $1\angle 0^{0}$ p.u., also called as a flat start. Let us assume that the first bus is a slack bus and from bus 2 to $‘m’$ bus are the PV buses for a $‘n’$ bus system. The remaining $‘n-m-1’$ buses are the PQ buses. The complete procedure for Gauss-Seidel power flow is as given below - 

 <b>Step 1:</b> Initialize $V_{j}^{(0)}=V_j^{(spec)}\angle0°$ for $j=2,3,\ldots,m$ and $V_j^{(0)}=1\angle0°$ for $j=\left(m+1\right),\ \left(m+2\right),\ldots,n$. Set iteration count $k=1$. 


 <b>Step 2:</b> Perform the following operations for $i=2,3,\ldots,m$.

<br>&nbsp;&nbsp;&nbsp;&nbsp;(a)  Calculate:
$Q_i^{(k)}=-\sum_{j=1}^{n}\left|V_i^{(k-1)}\right|\left|V_j^{(k-1)}\right|\left|Y_{ij}\right|\sin{\left(\theta_{ij}\ {+\ \delta}_j^{(k-1)}-\delta_i^{(k-1)}\right)} $

<br>&nbsp;&nbsp;&nbsp;&nbsp;(b)	If $Q_i^{min}<Q_i^{\left(k\right)}<Q_i^{max}$, then assign $\left|V_i^{(k)}\right|=V_i^{(spec)}$ and $\delta_i^{(k)}=\angle\left(A_i^{(k)}\right)$ <br>&nbsp;&nbsp;&nbsp;&nbsp;where $A_i^{(k)}$ is given by,

<br>&nbsp;&nbsp;&nbsp;&nbsp;$A_i^{(k)}=\frac{1}{Y_{ii}}\left(\frac{P_i-jQ_i^{(k)}}{\left\{V_i^{(k-1)}\right\}^\ast}-\sum_{j=1\ }^{i-1}{Y_{ij}V_j^{(k)}}-\sum_{j=i+1\ }^{n}{Y_{ij}V_j^{(k-1)}}\right)$

<br>&nbsp;&nbsp;&nbsp;&nbsp;(c) If $Q_i^{(k)}\geq Q_i^{max}$, then calculate,

<br>&nbsp;&nbsp;&nbsp;&nbsp;$V_i^{(k)}=\frac{1}{Y_{ii}}\left(\frac{P_i-jQ_i^{max}}{\left\{V_i^{(k-1)}\right\}^\ast}-\sum_{j=1\ }^{i-1}{Y_{ij}V_j^{(k)}}-\sum_{j=i+1\ }^{n}{Y_{ij}V_j^{(k-1)}}\right)$

<br>&nbsp;&nbsp;&nbsp;&nbsp;(d) If $Q_i^{(k)}\le Q_i^{min}$, then calculate,

<br>&nbsp;&nbsp;&nbsp;&nbsp;$V_i^{(k)}=\frac{1}{Y_{ii}}\left(\frac{P_i-jQ_i^{min}}{\left\{V_i^{(k-1)}\right\}^\ast}-\sum_{j=1\ }^{i-1}{Y_{ij}V_j^{(k)}}-\sum_{j=i+1\ }^{n}{Y_{ij}V_j^{(k-1)}}\right)$

<br><b>Step 3:<b> For $i=\left(m+1\right)\ldots n$, calculate,

$V_i^{(k)}=\frac{1}{Y_{ii}}\left(\frac{P_i-jQ_i^{(k)}}{\left\{V_i^{(k-1)}\right\}^\ast}-\sum_{j=1\ }^{i-1}{Y_{ij}V_j^{(k)}}-\sum_{j=i+1\ }^{n}{Y_{ij}V_j^{(k-1)}}\right)$

<br><b>Step 4:<b> Compute $e_i^{\left(k\right)}=\left|V_i^{\left(k\right)}-V_i^{\left(k-1\right)}\right|$ for all $i=2,3,\ldots,n$;

<br><b>Step 5:<b> Compute $e^{(k)} = \max \left(e_2^{(k)}, e_3^{(k)}, \ldots, e_n^{(k)}\right)$;

<br><b>Step 6:<b> If $e^{(k)}<\epsilon$, stop and print the solution. Else set $k=k+1$, and go to step 2.


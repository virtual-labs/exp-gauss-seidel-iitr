<div style="font-family: 'Nunito Sans', sans-serif; font-size: 20px;text-align: justify;">

## Procedure
<b>STEP 1</b>: Enter the number of buses in a power system. Then, click on the “Generate Bus Table” and fill the details of buses i.e., Bus Type (Slack Bus = 1, PV Bus = 2, PQ Bus = 3), Voltage magnitude (pu), Angle (degree), P<sub>gen</sub> (pu), Q<sub>gen</sub> (pu), P<sub>load</sub> (pu), Q<sub>load</sub> (pu), Q<sub>min</sub> (pu), Q<sub>max</sub> (pu). 
<br>
<b>Note:</b> Bus data for two standard IEEE bus systems are provided- (I) IEEE 5-Bus system and (II) IEEE 14-Bus system. To access the data click on the button of Autofill Bus Data: IEEE 5-Bus or Autofill Bus Data: IEEE 14-Bus.
<br>
<br>
<b>STEP 2</b>: Enter the number of lines in a power system. Then, click on the “Generate Line Table” and fill the details of lines i.e., From Bus, To Bus, R (pu), X (pu), B (pu) (Full line charging admittance), Transformer Tap.  
<br>
<b>Note:</b> Line data for two standard IEEE bus systems are provided- (I) IEEE 5-Bus system and (II) IEEE 14-Bus system. To access the data click on the button of Autofill Line Data: IEEE 5-Bus or Autofill Line Data: IEEE 14-Bus.
<br>
<br>
<b>STEP 3</b>: Click on “Calculate Y-Bus”. The values of the Y-Bus matrix will be displayed.
<br>
<br>
<b>STEP 4</b>: Enter the Tolerance limit value and Maximum allowed iteration. The values for the tolerance limit and the maximum allowed iterations will be set.
<br>
<br>
<b>STEP 5</b>: Click on “Run Power Flow”. The number of iterations, Buses data: Bus Type, Voltage magnitude (pu), Angle (degree) , P<sub>gen</sub> (pu), Q<sub>gen</sub> (pu), Pload<sub>load</sub> (pu), Q<sub>load</sub> (pu), Line flows data: P<sub>line</sub> (pu), Q<sub>line</sub> (pu), P<sub>loss</sub> (pu), Q<sub>loss</sub> (pu), Total real and reactive power losses (pu) after convergence will be displayed.
<br>
<b>Note:</b> If the power flow does not converge within the maximum allowed iterations, a message will pop up stating, “The power flow analysis did not converge within the maximum allowed iterations”.
<br>

// Global variables to store bus, line data, and Ybus matrix
let buses = [], lines = [], Y = [];

function generateBusTable() {
  var numBuses = parseInt(document.getElementById('numBuses').value);
  if (isNaN(numBuses) || numBuses <= 0) {
    alert("Please enter a valid number of Buses.");
    return;
  }

  var tableHtml = `
      <table>
          <tr>
              <th>Bus No.</th>
              <th>Bus Type</th>
              <th>Voltage (pu)</th>
              <th>Angle (degree)</th>
              <th>P<sub>gen</sub> (pu)</th>
              <th>Q<sub>gen</sub> (pu)</th>
              <th>P<sub>load</sub> (pu)</th>
              <th>Q<sub>load</sub> (pu)</th>
              <th>Q<sub>min</sub> (pu)</th>
              <th>Q<sub>max</sub> (pu)</th>
          </tr>
  `;

  for (var i = 1; i <= numBuses; i++) {
      tableHtml += `
          <tr>
              <td>${i}</td>
              <td><input type="text" id="busType${i}" required></td>
              <td><input type="number" id="busV${i}" required></td>
              <td><input type="number" id="busAng${i}" required></td>
              <td><input type="text" id="busPg${i}" required></td>
              <td><input type="text" id="busQg${i}" required></td>
              <td><input type="text" id="busPL${i}" required></td>
              <td><input type="text" id="busQL${i}" required></td>
              <td><input type="text" id="busQmin${i}" required></td>
              <td><input type="text" id="busQmax${i}" required></td>
          </tr>
      `;
  }
  
  tableHtml += '</table>';
  document.getElementById('busTableContainer').innerHTML = tableHtml;
}

// Function to autofill bus data for a five-bus network
 function autofillFiveBusNetwork() {
  var numBuses = 5;
  document.getElementById('numBuses').value = numBuses; // Update input field
  generateBusTable(); // Regenerate table with updated number of buses

  // Autofill data into the table
  var defaultbusType = [1, 2, 2, 3, 3];
  var defaultbusV = [1, 1, 1, 1, 1];
  var defaultbusAng = [0, 0, 0, 0, 0];
  var defaultbusPg = [0, 0.5, 1.0, 0, 0];
  var defaultbusQg = [0, 0, 0, 0, 0];
  var defaultbusPL = [0, 0, 0, 1.15, 0.85];
  var defaultbusQL = [0, 0, 0, 0.6, 0.4];
  var defaultbusQmin = [0, -5, -0.5, 0, 0];
  var defaultbusQmax = [0, 5, 0.5, 0, 0];

  for (var i = 0; i < numBuses; i++) {
    document.getElementById(`busType${i+1}`).value = defaultbusType[i]; // Bus type
    document.getElementById(`busV${i+1}`).value = defaultbusV[i]; // Voltage (pu)
    document.getElementById(`busAng${i+1}`).value = defaultbusAng[i]; // Angle (degree)
    document.getElementById(`busPg${i+1}`).value = defaultbusPg[i]; // Pgen (pu)
    document.getElementById(`busQg${i+1}`).value = defaultbusQg[i]; // Qgen (pu)
    document.getElementById(`busPL${i+1}`).value = defaultbusPL[i]; // Pload (pu)
    document.getElementById(`busQL${i+1}`).value = defaultbusQL[i]; // Qload (pu)
    document.getElementById(`busQmin${i+1}`).value = defaultbusQmin[i]; // Qload (pu)
    document.getElementById(`busQmax${i+1}`).value = defaultbusQmax[i]; // Qload (pu)
  }
}

// Function to autofill bus data for a five-bus network
function autofillFourteenBusNetwork() {
  var numBuses = 14;
  document.getElementById('numBuses').value = numBuses; // Update input field
  generateBusTable(); // Regenerate table with updated number of buses

  // Autofill data into the table
  var defaultbusType = [1, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3];
  var defaultbusV = [1.06, 1.045, 1, 1, 1, 1.07, 1, 1, 1, 1, 1, 1, 1, 1]; 
  var defaultbusAng = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultbusPg = [0, 0.183, 0, 0, 0, 0.112, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultbusQg = [0, 0.05857, 0, 0, 0, 0.442, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultbusPL = [0, 0, 1.19, 0.4779, 0.07599, 0, 0, 0, 0.29499, 0.09, 0.03501, 0.06099, 0.135, 0.14901];
  var defaultbusQL = [0, 0, 0.08762, 0.039, 0.01599, 0, 0, 0.129, 0.16599, 0.05799, 0.018, 0.01599, 0.5799, 0.05001];
  var defaultbusQmin = [0, -5, 0, 0, 0, -5, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultbusQmax = [0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0];
  

  for (var i = 0; i < numBuses; i++) {
    document.getElementById(`busType${i+1}`).value = defaultbusType[i]; // Bus type
    document.getElementById(`busV${i+1}`).value = defaultbusV[i]; // Voltage (pu)
    document.getElementById(`busAng${i+1}`).value = defaultbusAng[i]; // Angle (degree)
    document.getElementById(`busPg${i+1}`).value = defaultbusPg[i]; // Pgen (pu)
    document.getElementById(`busQg${i+1}`).value = defaultbusQg[i]; // Qgen (pu)
    document.getElementById(`busPL${i+1}`).value = defaultbusPL[i]; // Pload (pu)
    document.getElementById(`busQL${i+1}`).value = defaultbusQL[i]; // Qload (pu)
    document.getElementById(`busQmin${i+1}`).value = defaultbusQmin[i]; // Qload (pu)
    document.getElementById(`busQmax${i+1}`).value = defaultbusQmax[i]; // Qload (pu)
    
  }
}

// Function to save bus data
function saveBusData() {
  buses = [];
  var numBuses = parseInt(document.getElementById('numBuses').value);
  for (var i = 0; i < numBuses; i++) {
    buses.push({
      V: parseFloat(document.getElementById(`busV${i+1}`).value),
      angle: parseFloat(document.getElementById(`busAng${i+1}`).value),
      Pg: parseFloat(document.getElementById(`busPg${i+1}`).value),
      Qg: parseFloat(document.getElementById(`busQg${i+1}`).value),
      PL: parseFloat(document.getElementById(`busPL${i+1}`).value),
      QL: parseFloat(document.getElementById(`busQL${i+1}`).value),
      type: parseFloat(document.getElementById(`busType${i+1}`).value),
      Qmax: parseFloat(document.getElementById(`busQmax${i+1}`).value),
      Qmin: parseFloat(document.getElementById(`busQmin${i+1}`).value),
    });
  }
}

// Function to generate line data input table
function generateLineTable() {
  var numLines = parseInt(document.getElementById('numLines').value);
  if (isNaN(numLines) || numLines <= 0) {
    alert("Please enter a valid number of lines.");
    return;
  }

  var tableHtml = `
      <table>
          <tr>
              <th>Line No.</th>
              <th>From Bus</th>
              <th>To Bus</th>
              <th>R (pu)</th>
              <th>X (pu)</th>
              <th>B (pu)</th>
              <th>Tx. Tap</th>
          </tr>
  `;

  for (var i = 1; i <= numLines; i++) {
      tableHtml += `
          <tr>
              <td>${i}</td>
              <td><input type="number" id="fromBus${i}" required></td>
              <td><input type="number" id="toBus${i}" required></td>
              <td><input type="text" id="R${i}" required></td>
              <td><input type="text" id="X${i}" required></td>
              <td><input type="text" id="Charging${i}" required></td>
              <td><input type="text" id="Tap${i}" required></td>
          </tr>
      `;
  }
  
  tableHtml += '</table>';
  document.getElementById('lineTableContainer').innerHTML = tableHtml;
}

// Function to autofill line data for six lines
function autofillSixLines() {
  var numLines = 6;
  document.getElementById('numLines').value = numLines; // Update input field
  generateLineTable(); // Regenerate table with updated number of lines

  // Autofill data into the table
  var defaultFromBus = [1, 1, 2, 3, 3, 4];
  var defaultToBus = [2, 5, 3, 4, 5, 5];
  var defaultR = [0.042, 0.031, 0.031, 0.024, 0.053, 0.063];
  var defaultX = [0.168, 0.126, 0.126, 0.136, 0.210, 0.252];
  var defaultCharging = [0.082, 0.062, 0.062, 0.164, 0.102, 0.122];
  var defaultTap = [0, 0, 0, 0, 0, 0];

  for (var i = 0; i < numLines; i++) {
    document.getElementById(`fromBus${i+1}`).value = defaultFromBus[i];
    document.getElementById(`toBus${i+1}`).value = defaultToBus[i];
    document.getElementById(`R${i+1}`).value = defaultR[i];
    document.getElementById(`X${i+1}`).value = defaultX[i];
    document.getElementById(`Charging${i+1}`).value = defaultCharging[i];
    document.getElementById(`Tap${i+1}`).value = defaultTap[i];
  }
}

// Function to autofill line data for six lines
function autofillTwentyLines() {
  var numLines = 20;
  document.getElementById('numLines').value = numLines; // Update input field
  generateLineTable(); // Regenerate table with updated number of lines

  // Autofill data into the table
  var defaultFromBus = [1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 7, 9, 9, 10, 12, 13];
  var defaultToBus = [2, 5, 3, 4, 5, 4, 5, 7, 9, 6, 11, 12, 13, 8, 9, 10, 14, 11, 13, 14];
  var defaultR = [0.0194, 0.054, 0.047, 0.0581, 0.0569, 0.067, 0.0134, 0, 0, 0, 0.095, 0.1229, 0.0661, 0, 0, 0.0318, 0.127, 0.082, 0.2209, 0.1709];
  var defaultX = [0.0592, 0.223, 0.1979, 0.1763, 0.1738, 0.171, 0.0421, 0.209, 0.5562, 0.2522, 0.1989, 0.2557, 0.1302, 0.1762, 0.011, 0.0845, 0.2703, 0.192, 0.1999, 0.3479];
  var defaultCharging = [0.1056, 0.984, 0.0876, 0.0748, 0.0678, 0.0692, 0.0256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultTap = [0, 0, 0, 0, 0, 0, 0, 0.978, 0.969, 0.932, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i < numLines; i++) {
    document.getElementById(`fromBus${i+1}`).value = defaultFromBus[i];
    document.getElementById(`toBus${i+1}`).value = defaultToBus[i];
    document.getElementById(`R${i+1}`).value = defaultR[i];
    document.getElementById(`X${i+1}`).value = defaultX[i];
    document.getElementById(`Charging${i+1}`).value = defaultCharging[i];
    document.getElementById(`Tap${i+1}`).value = defaultTap[i];
  }
}

// Function to save line data
function saveLineData() {
  lines = [];
  var numLines = parseInt(document.getElementById('numLines').value);
  for (var i = 0; i < numLines; i++) {
    lines.push({
      from: parseInt(document.getElementById(`fromBus${i + 1}`).value),
      to: parseInt(document.getElementById(`toBus${i + 1}`).value),
      R: parseFloat(document.getElementById(`R${i + 1}`).value),
      X: parseFloat(document.getElementById(`X${i + 1}`).value),
      charging: parseFloat(document.getElementById(`Charging${i + 1}`).value),
      // type: 0 // Assuming all are lines
    });
  }
}

// Function to format complex numbers for display
function formatComplexNumber(complexNumber, decimals) {
  let real = parseFloat(complexNumber.re).toFixed(decimals);
  let imag = parseFloat(complexNumber.im).toFixed(decimals);
  return parseFloat(imag) >= 0 ? `${real} + ${imag}i` : `${real} - ${Math.abs(imag)}i`;
}

// Function to calculate the Ybus matrix
function calculateYbus() {
  saveBusData();
  saveLineData();

  var numBuses = buses.length;
  var numLines = lines.length;

  // Initialize Y matrix
  Y = Array.from({ length: numBuses }, () => Array.from({ length: numBuses }, () => math.complex(0, 0)));

  // Calculate line admittances and update Ybus
  for (var i = 0; i < numLines; i++) {
      var from = lines[i].from - 1; // Convert to zero-based index
      var to = lines[i].to - 1; // Convert to zero-based index
      var R = lines[i].R;
      var X = lines[i].X;
      var B = lines[i].charging / 2; // Half charging admittance at each end

      var admittance = math.divide(1, math.complex(R, X));
      var shuntAdmittance = math.complex(0, B);

      Y[from][to] = math.subtract(Y[from][to], admittance);
      Y[to][from] = Y[from][to]; // Symmetric matrix
      Y[from][from] = math.add(Y[from][from], admittance, shuntAdmittance);
      Y[to][to] = math.add(Y[to][to], admittance, shuntAdmittance);
  }

  displayYbusMatrix();
}

// Function to display the Ybus matrix
function displayYbusMatrix() {
  var tableHtml = '<table><tr><th></th>';
  for (var i = 0; i < Y.length; i++) {
      tableHtml += `<th>${i+1}</th>`;
  }
  tableHtml += '</tr>';
  for (var i = 0; i < Y.length; i++) {
      tableHtml += `<tr><th>${i+1}</th>`;
      for (var j = 0; j < Y[i].length; j++) {
          tableHtml += `<td>${formatComplexNumber(Y[i][j], 4)}</td>`;
      }
      tableHtml += '</tr>';
  }
  tableHtml += '</table>';
  document.getElementById('ybusContainer').innerHTML = tableHtml;
}

// Function to run the load flow analysis
function runLoadFlow() {
  saveBusData();
  saveLineData();

  if (!buses.length || !lines.length) {
      alert('Please generate and fill in the bus and line tables first.');
      return;
  }

  let V = buses.map(bus => math.complex({ r: bus.V, phi: bus.angle * Math.PI / 180 }));
  let I = Array(buses.length).fill(math.complex(0, 0));
  
  let convergence = false;
  let iterations = 0;
  var Tolerance = parseFloat(document.getElementById('Tolerance').value);
  var MaIteration = parseInt(document.getElementById('MaIteration').value);

 var maxIterations = MaIteration;
 var toleranceLimit = Tolerance;

  //   const maxIterations = 1000;  // Increased iteration limit
  //  const toleranceLimit = 1e-12;  // Adjusted tolerance limit
  // const Slack = 1;  //
  // const PV = 2;  // 
  // const PQ = 3;  // 

  while (!convergence && iterations < maxIterations) {
      convergence = true;
      let Vprev = V.slice();  // Copy current voltages for convergence check
      iterations++;
      buses.forEach((bus, i) => {
          if (bus.type === 1) return;  // Slack bus voltage is fixed

          let PYV = math.complex(0, 0);
          // Sum the contributions from all connected buses
          Y.forEach((row, k) => {
              if (i !== k) {
                  PYV = math.add(PYV, math.multiply(row[i], V[k]));
              }
          });

          if (bus.type === 3) {
              const S = math.complex(bus.Pg - bus.PL, -bus.Qg + bus.QL);  // S = Pg - PL - j(Qg - QL)
              V[i] = math.divide(math.subtract(math.divide(S, math.conj(V[i])), PYV), Y[i][i]);
              
          } else if (bus.type === 2) {
              let Q = -math.im(math.multiply(math.conj(V[i]), math.add(PYV, math.multiply(Y[i][i], V[i]))));
                 // Adjust Q to be within the limits
                  if (Q >= bus.Qmax) {
                      Q = bus.Qmax;
                      V[i] = math.divide(math.subtract(math.divide(math.complex(bus.Pg, -Q), math.conj(V[i])), PYV), Y[i][i]);

                  } else if (Q <= bus.Qmin) {
                      Q = bus.Qmin;
                      V[i] = math.divide(math.subtract(math.divide(math.complex(bus.Pg, -Q), math.conj(V[i])), PYV), Y[i][i]);

                  } else{
              V[i] = math.divide(math.subtract(math.divide(math.complex(bus.Pg, -Q), math.conj(V[i])), PYV), Y[i][i]);
              V[i] = math.complex({ r: bus.V, phi: math.arg(V[i]) }); // Maintain voltage magnitude, update angle
              }
          }
          // Calculate the error and check for convergence
          const error = math.abs(math.subtract(V[i], Vprev[i]));
          if (error > toleranceLimit) {
              convergence = false;  // Update the voltage for bus i
          }
      });

      // Log the voltages at each iteration
      console.log(`Iteration ${iterations}:`);
      V.forEach((voltage, index) => {
          console.log(`Bus ${index + 1}: Magnitude = ${math.abs(voltage).toFixed(4)}, Angle = ${(math.arg(voltage) * 180 / Math.PI).toFixed(2)} degrees`);
      });
  }

  if (!convergence) {
      alert('The power flow analysis did not converge within the maximum allowed iterations.');
  } else {
      // Calculate currents I based on final voltages V
      buses.forEach((bus, i) => {
          let sum = math.complex(0, 0);
          Y[i].forEach((y, j) => {
              sum = math.add(sum, math.multiply(y, V[j]));
          });
          I[i] = sum;
      });

      // Calculate S, Pgen, and Qgen
      let S = V.map((v, i) => math.multiply(v, math.conj(I[i])));
      buses.forEach((bus, i) => {
          if (bus.type === 1) {
              bus.Pg = math.re(S[i]);
              bus.Qg = math.im(S[i]);
          } else if (bus.type === 2) {
              bus.Pg = math.re(S[i]) + bus.PL;
              bus.Qg = math.im(S[i]) + bus.QL;
          } else if (bus.type === 3) {
              bus.Pg = 0;
              bus.Qg = 0;
          }
      });

      // Calculate line flows and losses
      let FromNode = lines.map(line => line.from - 1); // Convert to zero-based index
      let ToNode = lines.map(line => line.to - 1);     // Convert to zero-based index
      let suceptancia = [];
      let y = [];

      lines.forEach((line, k) => {
          let b = math.complex(0, line.charging / 2);
          suceptancia.push([b, b]);
          y.push(math.divide(1, math.complex(line.R, line.X)));
      });

      // Calculate complex power flows
      let Ss = lines.map((line, k) => math.multiply(V[FromNode[k]], math.conj(math.add(math.multiply(math.subtract(V[FromNode[k]], V[ToNode[k]]), y[k]), suceptancia[k][0]))));
      let Sr = lines.map((line, k) => math.multiply(V[ToNode[k]], math.conj(math.add(math.multiply(math.subtract(V[ToNode[k]], V[FromNode[k]]), y[k]), suceptancia[k][1]))));

      // Calculate active and reactive power flows
      let Pij = Ss.map(S => math.re(S));
      let Qij = Ss.map(S => math.im(S));
      let Pji = Sr.map(S => math.re(S));
      let Qji = Sr.map(S => math.im(S));

     

      // Calculate power losses
      let P_loss = math.abs(Pij.map((P, k) => P + Pji[k]));
      let Q_loss = math.abs(Qij.map((Q, k) => Q + Qji[k]));

      let TotalP_loss = math.sum(math.abs(Pij.map((P, k) => P + Pji[k])));
      let TotalQ_loss = math.sum(math.abs(Qij.map((Q, k) => Q + Qji[k])));

      displayResults(V, iterations, Pij, Qij, Pji, Qji, P_loss, Q_loss, lines, TotalP_loss, TotalQ_loss);
  }
}

// Function to display the results
function displayResults(V, iterations, Pij, Qij, Pji, Qji, P_loss, Q_loss, lines, TotalP_loss, TotalQ_loss) {
  let resultsHtml = `<p>Number of iterations: ${iterations}</p>`;

  // Display bus data
  resultsHtml += `<table><tr><th>Bus No.</th><th>Voltage (pu)</th><th>Angle (degree)</th><th>P<sub>gen</sub> (pu)</th><th>Q<sub>gen</sub> (pu)</th><th>P<sub>load</sub> (pu)</th><th>Q<sub>load</sub> (pu)</th></tr>`;

  V.forEach((v, index) => {
      const bus = buses[index];
      const mag = math.abs(v).toFixed(4);
      const angle = (math.arg(v) * 180 / Math.PI).toFixed(2);
      resultsHtml += `<tr><td>${index + 1}</td><td>${mag}</td><td>${angle}</td><td>${bus.Pg.toFixed(4)}</td><td>${bus.Qg.toFixed(4)}</td><td>${bus.PL.toFixed(4)}</td><td>${bus.QL.toFixed(4)}</td></tr>`;
  });
  resultsHtml += "</table>";


// Display line flows
  resultsHtml += `<h2>Line Flows</h2><table><tr><th>Line No.</th><th>From Bus</th><th>To Bus</th><th>P<sub>line(From-To)</sub> (pu)</th><th>Q<sub>line(From-To)</sub> (pu)</th><th>P<sub>line(To-From)</sub> (pu)</th><th>Q<sub>line(To-From)</sub> (pu)</th></th><th>P<sub>loss</sub> (pu)</th><th>Q<sub>loss</sub> (pu)</th></tr>`;
lines.forEach((line, index) => {
    resultsHtml += `<tr><td>${index + 1}</td><td>${line.from}</td><td>${line.to}</td><td>${Pij[index].toFixed(4)}</td><td>${Qij[index].toFixed(4)}</td><td>${Pji[index].toFixed(4)}</td><td>${Qji[index].toFixed(4)}</td><td>${P_loss[index].toFixed(4)}</td><td>${Q_loss[index].toFixed(4)}</td></tr>`;
});
resultsHtml += "</table>";


resultsHtml += `<p>Total real power losses (pu): ${TotalP_loss.toFixed(6)}.</p>`;
resultsHtml += `<p>Total reactive power losses (pu): ${TotalQ_loss.toFixed(6)}.</p>`;

document.getElementById('loadFlowResults').innerHTML = resultsHtml;

}

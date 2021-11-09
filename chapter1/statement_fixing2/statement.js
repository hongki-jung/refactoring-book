import createStatementData from './createStatementData.js';
import { invoice } from './invoices.json';
import { plays } from "./plays.json";


function statement(invoice, plays){
  return rederPlainText(createStatementData(invoice, plays));
}

function rederPlainText(data, plays){
  let result = `청구 내역(고객명: for ${data.customer})\n`;
  for (let perf of data.performances){
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }

  result += `총액 : ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result

}

function htmlStatement(invoice, plays){
  return renderHtml(createStatementData(invoice, plays));
}

function rederHtml(data){
  let result = `<h1>Hello world</h1>`
  return result;
}

function usd(aNumber){
  return new Intl.NumberFormat("en-US",{
    style:"currency",
    currency: "USD",
    minimumFractionDigits:2
  }).format(aNumber/100);
}

export function calculateRepayment(
  amount: number,
  years: number,
  interest: number,
  type: "repayment" | "interest",
) {
  const monthlyRate = interest / 100 / 12;
  const totalPayment = years * 12;

  const format = new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });

  if (type == "repayment") {
    const monthlyRepayment =
      (amount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayment))) /
      (Math.pow(1 + monthlyRate, totalPayment) - 1);
    const totalRepayment = monthlyRepayment * totalPayment;

    return {
      monthlyRepayment: format.format(monthlyRepayment),
      totalPayment: format.format(totalRepayment),
    };
  } else if (type === "interest") {
    const monthlyRepayment = amount * monthlyRate;
    const totalRepayment = monthlyRepayment * totalPayment + amount;

    return {
      monthlyRepayment: format.format(monthlyRepayment),
      totalPayment: format.format(totalRepayment),
    };
  } else {
    throw new Error("Invalid Mortgage Type: " + type);
  }
}

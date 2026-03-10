import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TaxSummary = () => {
  const [loading, setLoading] = useState(true);
  const [taxData, setTaxData] = useState(null);

  useEffect(() => {
    // Simulate API call to get tax data
    const fetchTaxData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock data
      setTaxData({
        income: {
          salary: 85000,
          interest: 1200,
          dividends: 3500,
          total: 89700
        },
        deductions: {
          retirement: 6000,
          standardDeduction: 12950,
          hsa: 3650,
          studentLoanInterest: 1500,
          total: 24100
        },
        taxableIncome: 65600,
        taxBreakdown: {
          federal: 7272,
          state: 3280,
          fica: 6862,
          total: 17414
        },
        effectiveTaxRate: 19.4,
        potentialSavings: [
          { 
            id: 1, 
            name: 'Increase 401(k) contributions', 
            description: 'You can contribute up to $22,500 to your 401(k) in 2025. Increasing your contribution could save you approximately $1,760 in taxes.', 
            potentialSavings: 1760 
          },
          { 
            id: 2, 
            name: 'Contribute to IRA', 
            description: 'You could contribute up to $6,500 to a traditional IRA for additional tax savings of approximately $1,430.',
            potentialSavings: 1430
          },
          { 
            id: 3, 
            name: 'Contribute to HSA', 
            description: 'You can contribute an additional $450 to your HSA for additional tax savings of approximately $99.',
            potentialSavings: 99  
          }
        ]
      });
      
      setLoading(false);
    };
    
    fetchTaxData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <svg className="animate-spin h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Tax Summary</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Total Income</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">${taxData.income.total.toLocaleString()}</dd>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Total Tax</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">${taxData.taxBreakdown.total.toLocaleString()}</dd>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Effective Tax Rate</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{taxData.effectiveTaxRate}%</dd>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Income Breakdown</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Salary</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${taxData.income.salary.toLocaleString()}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Interest</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${taxData.income.interest.toLocaleString()}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Dividends</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${taxData.income.dividends.toLocaleString()}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Total Income</dt>
              <dd className="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">${taxData.income.total.toLocaleString()}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Deductions</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Retirement Contributions</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${taxData.deductions.retirement.toLocaleString()}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Standard Deduction</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${taxData.deductions.standardDeduction.toLocaleString()}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">HSA Contributions</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${taxData.deductions.hsa.toLocaleString()}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Student Loan Interest</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${taxData.deductions.studentLoanInterest.toLocaleString()}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Total Deductions</dt>
              <dd className="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">${taxData.deductions.total.toLocaleString()}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Taxable Income</dt>
              <dd className="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">${taxData.taxableIncome.toLocaleString()}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Tax Breakdown</h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Federal Income Tax</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${taxData.taxBreakdown.federal.toLocaleString()}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">State Income Tax</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${taxData.taxBreakdown.state.toLocaleString()}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">FICA (Social Security & Medicare)</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${taxData.taxBreakdown.fica.toLocaleString()}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Total Tax</dt>
              <dd className="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">${taxData.taxBreakdown.total.toLocaleString()}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Tax-Saving Opportunities</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Based on your financial situation, here are some ways you could save on taxes.</p>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {taxData.potentialSavings.map((saving) => (
              <li key={saving.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{saving.name}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Save up to ${saving.potentialSavings.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {saving.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between mb-12">
        <Link
          to="/dashboard/forms"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Auto-Fill Tax Forms
        </Link>
        <Link
          to="/dashboard/chatbot"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Ask Tax Assistant
        </Link>
      </div>
    </div>
  );
};

export default TaxSummary;
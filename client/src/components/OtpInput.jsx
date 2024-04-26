

const OtpInput = ({count}) => {
  const feildlenght = count
  const [verifyCode, setVerifyCode] = useState([]);
  const handleOnChange = async(e) => {
    const value = e.target.value;
    setVerifyCode(prev => ({
      ...prev,
      value
    }))
  }
  return (
    <div className="flex space-x-2">
            <input 
              type="number"
              className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-n-4 focus:border-n-5 focus:text-n-5 text-n-4 transition  z-20"
              value={verifyCode}
              onChange={handleOnChange}
            />
            <input 
              type="number"
              className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-n-4 focus:border-n-5 focus:text-n-5 text-n-4 transition  z-20"
              value={verifyCode}
              onChange={handleOnChange}
            />
            <input 
              type="number"
              className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-n-4 focus:border-n-5 focus:text-n-5 text-n-4 transition  z-20"
              value={verifyCode}
              onChange={handleOnChange}
            />
            <input 
              type="number"
              className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-n-4 focus:border-n-5 focus:text-n-5 text-n-4 transition  z-20"
              value={verifyCode}
              onChange={handleOnChange}
            />
            <input 
              type="number"
              className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-n-4 focus:border-n-5 focus:text-n-5 text-n-4 transition  z-20"
              value={verifyCode}
              onChange={handleOnChange}
            />
            <input 
              type="number"
              className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-n-4 focus:border-n-5 focus:text-n-5 text-n-4 transition  z-20"
              value={verifyCode}
              onChange={handleOnChange}
            />
          

      
      </div>
  )
}

export default OtpInput
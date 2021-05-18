using System;
using System.Collections.Generic;
using System.Text;

namespace Symas.Core.Validation
{
    public class ArgumentValidation<T>
    {
        public T Value { get; set; }
        public string ArgumentName { get; set; }

        public ArgumentValidation(T value, string argumentName)
        {
            Value = value;
            ArgumentName = argumentName;
        }
    }
}

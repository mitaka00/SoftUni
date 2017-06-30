using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Personal_Exception
{
    class PersonalException:Exception
    {
        public PersonalException():base("My first exception is awesome!!!")
        {

        }
    }
}

package com.robot.core.info.team
{
   import com.robot.core.info.UserInfo;
   import flash.utils.IDataInput;
   
   public class TeamMemberInfo extends UserInfo
   {
       
      
      public var priv:int;
      
      public var todayContri:int;
      
      public var contribute:int;
      
      public var title:String;
      
      private const privArray:Array = ["指挥官","管理员","队员"];
      
      public function TeamMemberInfo(param1:IDataInput = null, param2:Boolean = false)
      {
         super();
         if(param1)
         {
            userID = param1.readUnsignedInt();
            this.priv = param1.readUnsignedInt();
            if(param2)
            {
               this.todayContri = param1.readUnsignedInt();
               this.contribute = param1.readUnsignedInt();
               this.title = param1.readUTFBytes(18);
            }
            else
            {
               this.contribute = param1.readUnsignedInt();
               this.title = param1.readUTFBytes(18);
            }
         }
      }
      
      public function get privString() : String
      {
         return this.privArray[this.priv];
      }
   }
}

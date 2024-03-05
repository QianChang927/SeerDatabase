package com.robot.core.utils
{
   import com.robot.core.manager.ModuleManager;
   import com.taomee.analytics.Analytics;
   import flash.net.SharedObject;
   
   public class InputCommand
   {
       
      
      public function InputCommand()
      {
         super();
      }
      
      public static function parse(param1:String) : Boolean
      {
         var _loc2_:SharedObject = null;
         if(param1 == "#testLogin")
         {
            _loc2_ = SharedObject.getLocal("login_toggle","/");
            _loc2_.data["module_name"] = "new";
            _loc2_.data["skip_home_page"] = true;
            _loc2_.flush();
            return true;
         }
         if(param1 == "#testwatch")
         {
            ModuleManager.showAppModule("WatchTestPanel");
            return true;
         }
         if(param1 == "#Analytics.show")
         {
            Analytics.show();
            return true;
         }
         if(param1 == "#Analytics.hide")
         {
            Analytics.hide();
            return true;
         }
         return false;
      }
   }
}

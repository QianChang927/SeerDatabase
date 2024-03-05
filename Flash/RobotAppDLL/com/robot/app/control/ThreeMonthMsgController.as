package com.robot.app.control
{
   import com.robot.core.manager.MainManager;
   
   public class ThreeMonthMsgController
   {
       
      
      public function ThreeMonthMsgController()
      {
         super();
      }
      
      public static function startUp() : void
      {
         if(MainManager.actorInfo.isVip)
         {
            LocalMsgController.addLocalMsg("XiaoNianLetterPanel2",0,false,null,null,85);
         }
         else
         {
            LocalMsgController.addLocalMsg("XiaoNianLetterPanel",0,false,null,null,85);
         }
      }
   }
}

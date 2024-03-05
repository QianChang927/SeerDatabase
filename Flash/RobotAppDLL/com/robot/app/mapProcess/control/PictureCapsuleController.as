package com.robot.app.mapProcess.control
{
   import com.robot.app.control.LocalMsgController;
   
   public class PictureCapsuleController
   {
       
      
      public function PictureCapsuleController()
      {
         super();
      }
      
      public static function addMsg() : void
      {
         LocalMsgController.addLocalMsg("PictureCapsuleMsg2");
      }
   }
}

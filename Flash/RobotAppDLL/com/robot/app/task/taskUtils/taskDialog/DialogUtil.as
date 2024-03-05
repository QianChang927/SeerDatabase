package com.robot.app.task.taskUtils.taskDialog
{
   import com.robot.core.npc.NpcDialog;
   
   public class DialogUtil
   {
       
      
      public function DialogUtil()
      {
         super();
      }
      
      public static function playDilogs(param1:Array, param2:Array) : void
      {
         var currentIndex:int = 0;
         var handleFun:Function = null;
         var dialogsArry:Array = param1;
         var handlerArr:Array = param2;
         currentIndex = 0;
         handleFun = function():void
         {
            if(currentIndex < dialogsArry.length - 1)
            {
               if(null == dialogsArry[currentIndex][2])
               {
                  NpcDialog.show(dialogsArry[currentIndex][0],dialogsArry[currentIndex][1],dialogsArry[currentIndex][2],null,false,handleFun);
               }
               else
               {
                  NpcDialog.show(dialogsArry[currentIndex][0],dialogsArry[currentIndex][1],dialogsArry[currentIndex][2],[handleFun]);
               }
            }
            else if(currentIndex == dialogsArry.length - 1)
            {
               if(null == dialogsArry[currentIndex][2])
               {
                  if(null != handlerArr)
                  {
                     NpcDialog.show(dialogsArry[currentIndex][0],dialogsArry[currentIndex][1],dialogsArry[currentIndex][2],null,false,handlerArr[0]);
                  }
                  else
                  {
                     NpcDialog.show(dialogsArry[currentIndex][0],dialogsArry[currentIndex][1],dialogsArry[currentIndex][2]);
                  }
               }
               else
               {
                  NpcDialog.show(dialogsArry[currentIndex][0],dialogsArry[currentIndex][1],dialogsArry[currentIndex][2],handlerArr);
               }
            }
            ++currentIndex;
         };
         handleFun.call();
      }
   }
}

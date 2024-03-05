package com.robot.app2.control
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   
   public class SummerGameController
   {
       
      
      public function SummerGameController()
      {
         super();
      }
      
      public static function balance(param1:uint, param2:Array, param3:uint, param4:int = 0) : void
      {
         var finalScore:uint;
         var i:uint;
         var score:uint = param1;
         var scoreArr:Array = param2;
         var num:uint = param3;
         var version:int = param4;
         if(version < 4)
         {
            ModuleManager.showAppModule("SummerGameCity0729Panel");
            return;
         }
         finalScore = 0;
         i = 0;
         while(i < scoreArr.length)
         {
            if(score >= scoreArr[i])
            {
               finalScore++;
            }
            i++;
         }
         SocketConnection.sendByQueue(45674,[num,finalScore],function():void
         {
            ModuleManager.showAppModule("SummerGameCity0729Panel");
         });
      }
   }
}

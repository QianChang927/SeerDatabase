package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SixYearsVipGainAwardController
   {
      
      private static var _mc:MovieClip;
      
      private static var _todayGot:int = 0;
       
      
      public function SixYearsVipGainAwardController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var getBuffVal:Function = function():void
         {
            KTool.getMultiValue([5951,5952],function(param1:Array):void
            {
               var values:Array = param1;
               var max:Array = [1,30,90,180,360,367];
               var maxCount:int = 0;
               var i:int = 5;
               while(i >= 0)
               {
                  if(maxCount == 0 && values[0] >= max[i])
                  {
                     maxCount = i + 1;
                     break;
                  }
                  i--;
               }
               if(maxCount > values[1] && _todayGot == 0)
               {
                  ResourceManager.getResource(ClientConfig.getAppRes("six_year_award"),function(param1:MovieClip):void
                  {
                     _mc = param1;
                     LevelManager.iconLevel.addChild(param1);
                     param1.addEventListener(MouseEvent.CLICK,onClickHandler);
                  });
               }
            });
         };
         KTool.getBitSet([17736,1000131],function(param1:Array):void
         {
            var bits:Array = param1;
            _todayGot = bits[1];
            if(bits[0] > 0)
            {
               getBuffVal();
            }
            else
            {
               SocketConnection.sendWithCallback(43659,function(param1:SocketEvent):void
               {
                  getBuffVal();
               });
            }
         });
      }
      
      protected static function onClickHandler(param1:MouseEvent) : void
      {
         if(param1.target.name == "btnClose")
         {
            destroyMC();
         }
         else if(param1.target.name == "btnGet")
         {
            destroyMC();
            ModuleManager.showAppModule("SixYearsVipGainAwardPanel");
         }
      }
      
      private static function destroyMC() : void
      {
         if(_mc.parent)
         {
            _mc.parent.removeChild(_mc);
         }
         _mc.removeEventListener(MouseEvent.CLICK,onClickHandler);
      }
   }
}

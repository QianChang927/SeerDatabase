package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   
   public class SlothIsGoodController
   {
      
      private static var _totalNum:uint;
      
      public static var _powerNum:uint;
      
      public static var _bodhiNum:uint;
      
      public static var parentPanel:String;
      
      private static var _subMc:MovieClip;
      
      private static var _MsgPanel:MovieClip;
       
      
      public function SlothIsGoodController()
      {
         super();
      }
      
      public static function subPanelInfo(param1:MovieClip, param2:Boolean = true) : void
      {
         _subMc = param1;
         getPowerNum();
         if(param2)
         {
            getbodhiNum();
         }
         _subMc.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "buyBtn":
               startBuyPower();
               break;
            case "buyBtn_1":
               buybodhiItem();
         }
      }
      
      public static function destroySubPanel() : void
      {
         if(_subMc)
         {
            _subMc.removeEventListener(MouseEvent.CLICK,onClick);
            _subMc = null;
         }
      }
      
      private static function getPowerNum() : void
      {
         KTool.getMultiValue([3739,13760],function(param1:Array):void
         {
            _totalNum = !!MainManager.actorInfo.isVip ? 35 : 30;
            _powerNum = _totalNum - param1[1] + param1[0];
            if(_subMc)
            {
               _subMc.processTxt.text = "" + _powerNum + "/" + _totalNum;
               _subMc.processMc.gotoAndStop(Math.floor(_powerNum / _totalNum * 20));
            }
         });
      }
      
      public static function startBuyPower() : void
      {
         EventManager.addEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onUpdatePower);
         ModuleManager.showModule(ClientConfig.getAppModule("MultiBuyPanel"),"",{
            "productID":246164,
            "iconID":1707620,
            "exchangeID":7834
         });
      }
      
      private static function onUpdatePower(param1:*) : void
      {
         EventManager.removeEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onUpdatePower);
         getPowerNum();
      }
      
      private static function buybodhiItem() : void
      {
         EventManager.addEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onUpdateRain);
         ModuleManager.showModule(ClientConfig.getAppModule("MultiBuyPanel"),"",{
            "productID":246165,
            "iconID":1707630,
            "exchangeID":7835
         });
      }
      
      private static function onUpdateRain(param1:*) : void
      {
         EventManager.removeEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onUpdateRain);
         getbodhiNum();
      }
      
      public static function getbodhiNum(param1:Function = null) : void
      {
         var fun:Function = param1;
         ItemManager.updateItems([1707630],function():void
         {
            _bodhiNum = ItemManager.getNumByID(1707630);
            if(_subMc)
            {
               _subMc.numTxt.text = "" + _bodhiNum;
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
   }
}

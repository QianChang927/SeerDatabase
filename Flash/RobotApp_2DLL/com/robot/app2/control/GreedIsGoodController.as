package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GreedIsGoodController
   {
      
      private static var _totalNum:uint;
      
      public static var _powerNum:uint;
      
      public static var _rainNum:uint;
      
      public static var parentPanel:String;
      
      private static var _subMc:MovieClip;
      
      private static var _MsgPanel:MovieClip;
      
      private static var _buyPanel:MovieClip;
       
      
      public function GreedIsGoodController()
      {
         super();
      }
      
      public static function subPanelInfo(param1:MovieClip, param2:Boolean = true) : void
      {
         _subMc = param1;
         getPowerNum();
         if(param2)
         {
            getRainNum();
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
               buyRainItem();
         }
      }
      
      public static function destroySubPanel() : void
      {
         if(_subMc)
         {
            _subMc.removeEventListener(MouseEvent.CLICK,onClick);
            _subMc = null;
         }
         if(_MsgPanel)
         {
            _MsgPanel = null;
         }
      }
      
      private static function getPowerNum() : void
      {
         KTool.getMultiValue([3728,13755],function(param1:Array):void
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
            "productID":246128,
            "iconID":1707578,
            "exchangeID":7805
         });
      }
      
      private static function onUpdatePower(param1:*) : void
      {
         EventManager.removeEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onUpdatePower);
         getPowerNum();
      }
      
      private static function buyRainItem() : void
      {
         EventManager.addEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onUpdateRain);
         ModuleManager.showModule(ClientConfig.getAppModule("MultiBuyPanel"),"",{
            "productID":246129,
            "iconID":1707587,
            "exchangeID":7806
         });
      }
      
      private static function onUpdateRain(param1:*) : void
      {
         EventManager.removeEventListener(RobotEvent.CLOSE_MUL_BUY_PANEL,onUpdateRain);
         getRainNum();
      }
      
      public static function getRainNum(param1:Function = null) : void
      {
         var fun:Function = param1;
         ItemManager.updateItems([1707587],function():void
         {
            _rainNum = ItemManager.getNumByID(1707587);
            if(_subMc)
            {
               _subMc.numTxt.text = "" + _rainNum;
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function showAlertMsg(param1:uint, param2:Function = null) : void
      {
         var onAlarmClick:Function = null;
         var frame:uint = param1;
         var fun:Function = param2;
         var initial:Function = function():void
         {
            _MsgPanel.gotoAndStop(frame);
            _MsgPanel.addEventListener(MouseEvent.CLICK,onAlarmClick);
            MainManager.getStage().addChild(_MsgPanel);
         };
         onAlarmClick = function(param1:MouseEvent):void
         {
            var _loc2_:SimpleButton = param1.target as SimpleButton;
            if(_loc2_)
            {
               if(_loc2_.name == "buyPowerBtn")
               {
                  startBuyPower();
               }
               else if(_loc2_.name == "buyRainBtn")
               {
                  buyRainItem();
               }
               _MsgPanel.removeEventListener(MouseEvent.CLICK,onAlarmClick);
               DisplayUtil.removeForParent(_MsgPanel);
               if(fun != null)
               {
                  fun();
               }
            }
         };
         if(_MsgPanel == null)
         {
            ResourceManager.getResource(ClientConfig.getResPath("appRes/2015/1218/AlertMsg.swf"),function(param1:DisplayObject):void
            {
               _MsgPanel = param1 as MovieClip;
               initial();
            });
         }
         else
         {
            initial();
         }
      }
   }
}

package com.robot.app2.control
{
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.SoundManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.GoldProductXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DashForwardGameControl
   {
      
      private static const PET_COST:int = 28;
      
      private static const PET_PID:uint = 242006;
      
      private static const GAME_PID:uint = 242007;
      
      private static const ITEM_ID:uint = 1703000;
      
      private static const BUY_EID:uint = 4265;
      
      private static const GET_EID:uint = 4266;
      
      private static const REVIVE_EID:uint = 4267;
      
      private static const BIT_BUFF_HAS_GOT_PET:uint = 17651;
      
      private static var _loader:MCLoader;
      
      private static var _gameUI:Sprite;
      
      private static var _index:int;
      
      private static var _alarmMc:MovieClip;
      
      private static var _result:Array;
       
      
      public function DashForwardGameControl()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("DashForwardGame"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSwfComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSwfComplete(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSwfComplete);
         _gameUI = param1.getContent() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false,true);
         SoundManager.stopSound();
         EventManager.addEventListener("start_dash_forward_game",onStartGame);
         EventManager.addEventListener("dash_forward_game_revive",onRevive);
         EventManager.addEventListener("finish_dash_forward_game",onFinishGame);
         EventManager.addEventListener("dash_forward_game_exit",onExitGame);
         LevelManager.appLevel.addChild(_gameUI);
      }
      
      private static function onStartGame(param1:Event) : void
      {
         StatManager.sendStat2014("0226开学288钻礼包","点击开始小考验2游戏","2016运营活动");
      }
      
      private static function onRevive(param1:Event) : void
      {
         var itemId:int = 0;
         var e:Event = param1;
         itemId = int(GoldProductXMLInfo.getItemIDs(GAME_PID)[0]);
         KTool.enableMC([_gameUI],false);
         ItemManager.upDateCollection(itemId,function():void
         {
            var afterBuy:Function = null;
            var cancelBuy:Function = null;
            afterBuy = function(param1:DynamicEvent):void
            {
               var e:DynamicEvent = param1;
               EventManager.removeEventListener(RobotEvent.CANCEL_MONEY_BUY,cancelBuy);
               EventManager.removeEventListener(RobotEvent.MONEY_BUY,afterBuy);
               KTool.enableMC([_gameUI],true);
               KTool.doExchange(REVIVE_EID,function():void
               {
                  EventManager.dispatchEvent(new Event("dash_forward_game_revive_success"));
               });
            };
            cancelBuy = function(param1:RobotEvent):void
            {
               EventManager.removeEventListener(RobotEvent.CANCEL_MONEY_BUY,cancelBuy);
               EventManager.removeEventListener(RobotEvent.MONEY_BUY,afterBuy);
               KTool.enableMC([_gameUI],true);
               EventManager.dispatchEvent(new Event("dash_forward_game_revive_cancel"));
            };
            if(ItemManager.getNumByID(itemId) >= 1 && Boolean(ItemXMLInfo.getIsMidleItem(itemId)))
            {
               KTool.enableMC([_gameUI],true);
               KTool.doExchange(REVIVE_EID,function():void
               {
                  EventManager.dispatchEvent(new Event("dash_forward_game_revive_success"));
               });
               return;
            }
            ProductAction.buyMoneyProduct(GAME_PID,1);
            EventManager.addEventListener(RobotEvent.MONEY_BUY,afterBuy);
            EventManager.addEventListener(RobotEvent.CANCEL_MONEY_BUY,cancelBuy);
         });
      }
      
      private static function onFinishGame(param1:DynamicEvent) : void
      {
         var itemNum:int = 0;
         var e:DynamicEvent = param1;
         EventManager.removeEventListener("start_dash_forward_game",onStartGame);
         EventManager.removeEventListener("dash_forward_game_revive",onRevive);
         EventManager.removeEventListener("finish_dash_forward_game",onFinishGame);
         EventManager.removeEventListener("dash_forward_game_exit",onExitGame);
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         DisplayUtil.removeForParent(_gameUI);
         if(e.paramObject != null)
         {
            itemNum = int(e.paramObject);
            SocketConnection.sendWithCallback2(45624,function(param1:SocketEvent):void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("SchoolBoosterPacksAllThePeopleReceiveTestPanel"));
            },[2,itemNum]);
         }
      }
      
      private static function onExitGame(param1:Event) : void
      {
         var e:Event = param1;
         Alert.show("游戏还没结束哦，你确定要离开游戏吗？",function():void
         {
            EventManager.dispatchEvent(new Event("dash_forward_game_exit_success"));
         },function():void
         {
            EventManager.dispatchEvent(new Event("dash_forward_game_exit_cancel"));
         });
      }
   }
}

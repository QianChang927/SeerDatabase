package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GelinDoublePropertyEvoController
   {
      
      private static var _controlMc:MovieClip;
      
      private static var _curIndex:uint;
      
      private static var _subsetp:int;
      
      private static var _BossMc:MovieClip;
      
      private static var _geLinMc:MovieClip;
      
      private static var _curNum:uint;
      
      private static var _preNum:uint;
      
      private static const gateInfoArr:Array = [{
         "BossName":["火炎贝","派派","尤达","火爆鼠"],
         "roadName":"决心值",
         "Max":16,
         "proID":242037
      },{
         "BossName":["恩尔特","奥普斯","洛森","格洛斯"],
         "roadName":"正义值",
         "Max":25,
         "proID":242039
      },{
         "BossName":["火刃","派鲁基达","埃尔夫","卡鲁耶克"],
         "roadName":"爆发值",
         "Max":36,
         "proID":242041
      },{
         "BossName":["瑞德尔","戈登","暗黑波斯蒂加","莫迪西斯"],
         "roadName":"守护值",
         "Max":45,
         "proID":242043
      }];
       
      
      public function GelinDoublePropertyEvoController()
      {
         super();
      }
      
      public static function startEnterMap(param1:uint) : void
      {
         var gate:uint = param1;
         _curIndex = gate;
         _subsetp = 0;
         _curNum = 0;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         ResourceManager.getResource(ClientConfig.getAppRes("GelinDoubleProperty_control_ui"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.changeMapWithCallBack(10666,function():void
            {
               SocketConnection.sendWithCallback(CommandID.GELIN_DOUBLE_PROPERTY_EVO,function():void
               {
                  _controlMc = mc;
                  _controlMc.addEventListener(MouseEvent.CLICK,onControlMcClick);
                  enterMap();
                  showControlUI();
               },0);
            });
         });
      }
      
      private static function onControlMcClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "startBtn":
               _controlMc.parent.removeChild(_controlMc);
               showCamaerMove(function():void
               {
                  showBoss();
               });
               break;
            case "leave":
               leaveGame();
         }
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         enterMap();
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.GE_LIN,["我击败了" + gateInfoArr[_curIndex].BossName[_subsetp] + "，现在我准备"],["A 将它永久封印！","B 将它驱除此地！"," C 把它救起来，让它活下去！","D 不管它了，让它自生自灭！"],[function():void
            {
               afterAnswer(0);
            },function():void
            {
               afterAnswer(1);
            },function():void
            {
               afterAnswer(2);
            },function():void
            {
               afterAnswer(3);
            }],true);
         }
         else
         {
            Alert.show("格林在路上被击倒了，是否花费2钻石复活它！不复活将丢失本次已获得的决心值哦！",function():void
            {
               buyItem(gateInfoArr[_curIndex].proID);
            },function():void
            {
               leaveGame();
            });
         }
      }
      
      private static function buyItem(param1:int) : void
      {
         var productID:int = param1;
         KTool.buyProductByCallback(productID,1,function():void
         {
            SocketConnection.sendWithCallback(CommandID.GELIN_DOUBLE_PROPERTY_EVO,function():void
            {
               showControlUI();
            },1);
         });
      }
      
      private static function afterAnswer(param1:uint) : void
      {
         var num:uint = param1;
         SocketConnection.sendWithCallback(CommandID.GELIN_DOUBLE_PROPERTY_EVO,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _curNum = _loc2_.readUnsignedInt();
            switch(num)
            {
               case 0:
                  Alarm2.show("你封印了" + gateInfoArr[_curIndex].BossName[_subsetp] + "，它再也不会出现在这个世界上了。你获得了" + (_curNum - _preNum) + "点" + gateInfoArr[_curIndex].roadName + "！");
                  break;
               case 1:
                  Alarm2.show("你驱除了" + gateInfoArr[_curIndex].BossName[_subsetp] + "，它将远离这片邪恶的大地。你获得了" + (_curNum - _preNum) + "点" + gateInfoArr[_curIndex].roadName + "！");
                  break;
               case 2:
                  Alarm2.show("你救醒了" + gateInfoArr[_curIndex].BossName[_subsetp] + "，它正在慢慢醒来。你获得了" + (_curNum - _preNum) + "点" + gateInfoArr[_curIndex].roadName + "！");
                  break;
               case 3:
                  Alarm2.show("你没有时间理会" + gateInfoArr[_curIndex].BossName[_subsetp] + "，径自往前走去。你获得了" + (_curNum - _preNum) + "点" + gateInfoArr[_curIndex].roadName + "！");
            }
            _preNum = _curNum;
            showControlUI();
            if(_subsetp == 3)
            {
               leaveGame();
            }
            else
            {
               ++_subsetp;
            }
         },11 + num);
      }
      
      private static function showBoss() : void
      {
         _BossMc.visible = true;
         _BossMc.buttonMode = true;
         _BossMc.gotoAndStop(_curIndex * 5 + _subsetp + 1);
         AnimateManager.playMcAnimate(_BossMc,_curIndex * 5 + _subsetp + 1,"mc",function():void
         {
            FightManager.tryFight(136,[16538,23608,23609,16539,16540,23610,16541,16542]);
         });
      }
      
      private static function showCamaerMove(param1:Function) : void
      {
         var fun:Function = param1;
         var bgMoveMv:MovieClip = MapManager.currentMap.controlLevel["moveBg"];
         var fgMoveMv:MovieClip = MapManager.currentMap.controlLevel["moveFg"];
         var scalNumberBG:Number = 1.3;
         var scalNumberFG:Number = 1.15;
         var moveTime:Number = 2.5;
         TweenLite.to(bgMoveMv,moveTime,{
            "scaleX":scalNumberBG,
            "scaleY":scalNumberBG,
            "ease":function(param1:Number, param2:Number, param3:Number, param4:Number):Number
            {
               return param3 * (param1 = param1 / param4) * param1 + param2;
            },
            "onComplete":function():void
            {
               if(null != fun)
               {
                  fun();
               }
            }
         });
         TweenLite.to(fgMoveMv,moveTime,{
            "scaleX":scalNumberFG,
            "scaleY":scalNumberFG,
            "ease":function(param1:Number, param2:Number, param3:Number, param4:Number):Number
            {
               return param3 * (param1 = param1 / param4) * param1 + param2;
            }
         });
      }
      
      private static function showControlUI() : void
      {
         LevelManager.appLevel.addChild(_controlMc);
         _BossMc = MapManager.currentMap.controlLevel["moveFg"]["bossMc"];
         _geLinMc = MapManager.currentMap.controlLevel["moveFg"]["gelinMc"];
         _geLinMc.gotoAndStop(_curIndex + 1);
         _controlMc.txtMc.gotoAndStop(_curIndex + 1);
         _BossMc.visible = false;
         KTool.showScore(_controlMc.curNumMc,_curNum);
      }
      
      public static function leaveGame() : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         if(_controlMc)
         {
            _controlMc.removeEventListener(MouseEvent.CLICK,onControlMcClick);
            DisplayUtil.removeAllChild(_controlMc);
         }
         _controlMc = null;
         _preNum = 0;
         _preNum = 0;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         MainManager.actorModel.visible = true;
         MapNamePanel.show();
         KTool.changeMapWithCallBack(10667,function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("GelinDoublePropertyEvoRoadPanel"),"正在打开...");
         });
      }
      
      private static function enterMap(param1:* = null) : void
      {
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         MainManager.actorModel.visible = false;
         MapNamePanel.hide();
      }
      
      private static function onMapChange(param1:* = null) : void
      {
         if(_BossMc)
         {
            _BossMc = null;
            _BossMc = MapManager.currentMap.controlLevel["moveFg"]["bossMc"];
            _BossMc.visible = false;
         }
         if(MapManager.currentMap.id != 10666)
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
            leaveGame();
         }
      }
   }
}

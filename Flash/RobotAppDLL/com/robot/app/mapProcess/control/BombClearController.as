package com.robot.app.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.system.ApplicationDomain;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.ToolTipManager;
   
   public class BombClearController
   {
      
      private static var _mapIdList:Array = [4,5,9,7,103,332,6,1,8,101,107];
      
      private static var _mapPointList:Array = ["18|-121","18|-121","173|-9","179|51","208|74","-100|-55","57|-40","-22|-51","17|-102","217|-63","84|-112"];
      
      private static var _targetMapId:int;
      
      private static var _app:ApplicationDomain;
      
      private static var _bombMC:MovieClip;
      
      private static var mcLoader:MCLoader;
       
      
      public function BombClearController()
      {
         super();
      }
      
      public static function init() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapOpenHandler);
      }
      
      private static function onMapOpenHandler(param1:MapEvent) : void
      {
         _targetMapId = _mapIdList.indexOf(param1.mapModel.id);
         if(_targetMapId != -1)
         {
            MapManager.addEventListener(MapEvent.MAP_DESTROY,onMapDestroyHandler);
            SocketConnection.addCmdListener(CommandID.HALLOWEEN_BOMB_INFO,onBombInfo);
            SocketConnection.send(CommandID.HALLOWEEN_BOMB_INFO);
         }
      }
      
      private static function onBombInfo(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.HALLOWEEN_BOMB_INFO,onBombInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 1)
         {
            KTool.hideMapPlayerAndMonster();
            loadResource();
         }
      }
      
      private static function loadResource() : void
      {
         var _loc1_:String = String(ClientConfig.getResPath("module/ext/app/bomb.swf"));
         mcLoader = new MCLoader(_loc1_,LevelManager.appLevel,1,"正在加载游戏资源...");
         mcLoader.addEventListener(MCLoadEvent.SUCCESS,onComplete);
         mcLoader.doLoad();
      }
      
      private static function onComplete(param1:MCLoadEvent) : void
      {
         var p:Point;
         var event:MCLoadEvent = param1;
         mcLoader.removeEventListener(MCLoadEvent.SUCCESS,onComplete);
         _app = event.getApplicationDomain();
         _bombMC = new (_app.getDefinition("Bomb") as Class)() as MovieClip;
         p = KTool.StringToPoint(_mapPointList[_targetMapId]);
         _bombMC.x = p.x + 263;
         _bombMC.y = p.y + 380;
         MapManager.currentMap.depthLevel.addChild(_bombMC);
         DepthManager.swapDepthAll(MapManager.currentMap.depthLevel);
         ToolTipManager.add(_bombMC,"宇宙炸弹");
         _bombMC.buttonMode = true;
         _bombMC.addEventListener(MouseEvent.CLICK,onBomb);
         KTool.getFrameMc(_bombMC,1,"",function(param1:DisplayObject):void
         {
            var o:DisplayObject = param1;
            var mc:MovieClip = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               NpcDialog.show(NPC.PIRATE,["哼哼….小赛尔，你来晚啦！我们已经在飞船的所有地方都安装海盗炸弹，再过不久就要引爆了，赛尔号这下可完蛋了！"],["什么？必须尽快拆除炸弹！！！"],[function():void
               {
                  KTool.getFrameMc(_bombMC,2,"",function(param1:DisplayObject):void
                  {
                     var mc_1:* = undefined;
                     var p:DisplayObject = param1;
                     mc_1 = p as MovieClip;
                     AnimateManager.playMcAnimate(mc_1,1,"",function():void
                     {
                        mc_1.gotoAndStop(mc_1.totalFrames);
                        CommonUI.addYellowArrow(MapManager.currentMap.depthLevel,_bombMC.x + 35,_bombMC.y - _bombMC.height / 2 - 30);
                     });
                  });
               }]);
            });
         });
      }
      
      private static function onBomb(param1:MouseEvent) : void
      {
         var mc:MovieClip;
         var obj:Object = null;
         var e:MouseEvent = param1;
         CommonUI.removeYellowArrow(MapManager.currentMap.depthLevel);
         mc = e.currentTarget as MovieClip;
         obj = new Object();
         MainManager.actorModel.moveAndAction(new Point(mc.x - 50,mc.y),function():void
         {
            obj.successFun = successFun;
            obj.failFun = failFun;
            ModuleManager.showModule(ClientConfig.getAppModule("PirateBombPanel"),"正在打开面板",obj);
         });
      }
      
      private static function successFun(param1:uint) : void
      {
         var itemId:uint = param1;
         _bombMC.visible = false;
         NpcDialog.show(NPC.SEER,["耶，太棒了！我成功的拆除了海盗炸弹！晚上19:00去赫尔卡星让海盗也尝尝炸弹的味道！"],["继续去飞船场景寻找海盗炸弹！"],[function():void
         {
            var _loc1_:* = "1个<font color=\'#FF0000\'>" + ItemXMLInfo.getName(itemId) + "</font>已经放入了你的储存箱！";
            LevelManager.tipLevel.addChild(ItemInBagAlert.show(itemId,_loc1_));
            KTool.showMapPlayerAndMonster();
         }]);
      }
      
      private static function failFun() : void
      {
         MainManager.actorModel.visible = false;
         KTool.getFrameMc(_bombMC,3,"",function(param1:DisplayObject):void
         {
            var p:DisplayObject = param1;
            var mc_1:MovieClip = p as MovieClip;
            AnimateManager.playMcAnimate(mc_1,1,"",function():void
            {
               _bombMC.visible = false;
               MainManager.actorModel.visible = true;
               KTool.showMapPlayerAndMonster();
               NpcDialog.show(NPC.SEER,["可恶，居然失败了！不行，我还要去其他场景试试，否则赛尔号就有危险了！"],["在飞船场景寻找海盗炸弹！"]);
            });
         });
      }
      
      private static function onMapDestroyHandler(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,onMapDestroyHandler);
         destroy();
      }
      
      public static function destroy() : void
      {
         _targetMapId = -1;
         mcLoader = null;
      }
   }
}

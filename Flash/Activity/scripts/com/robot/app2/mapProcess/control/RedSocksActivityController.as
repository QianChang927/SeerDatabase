package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.loading.Loading;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class RedSocksActivityController
   {
      
      private static const mapIds:Array = [4,5,1,77,107,324];
      
      private static var socksMc:MovieClip;
      
      private static const _locArr:Array = [new Point(230,110),new Point(440,100),new Point(620,110)];
      
      private static var _sockNum:int = 0;
       
      
      public function RedSocksActivityController()
      {
         super();
      }
      
      public static function setUp() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         BonusController.addIgnore(158);
         PetManager.upDate(checkPetShow);
         SocketConnection.addCmdListener(CommandID.PET_RELEASE,function(param1:SocketEvent):void
         {
            var tid:uint = 0;
            var e:SocketEvent = param1;
            tid = setTimeout(function():void
            {
               clearTimeout(tid);
               PetManager.upDate(checkPetShow);
            },2 * 1000);
         });
      }
      
      private static function checkPetShow(param1:* = null) : void
      {
         var _loc5_:PetListInfo = null;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc2_:Array = [1020,1032,1034,1036,1038,1040];
         var _loc3_:Array = [];
         var _loc4_:Array = PetManager.getBagMap();
         for each(_loc5_ in _loc4_)
         {
            _loc3_.push(_loc5_.id);
         }
         _loc6_ = 0;
         while(_loc6_ < 6)
         {
            _loc7_ = int(_loc2_[_loc6_]);
            if(_loc3_.indexOf(_loc7_) == -1 && _loc3_.indexOf(_loc7_ + 1) == -1)
            {
               if(Boolean(PetManager.showingInfo) && PetManager.showingInfo.petID == 2548)
               {
                  MainManager.actorModel.hidePet();
               }
               return;
            }
            _loc6_++;
         }
         KTool.petFollow(2548);
      }
      
      private static function onMapChange(param1:MapEvent = null) : void
      {
         var e:MapEvent = param1;
         if(mapIds.indexOf(MapManager.currentMap.id) == -1)
         {
            return;
         }
         ResourceManager.getResource(ClientConfig.getActiveUrl("socks"),function(param1:MovieClip):void
         {
            var _loc2_:Number = Number(_locArr[_sockNum].y);
            var _loc3_:Number = Number(_locArr[_sockNum].x);
            MapManager.currentMap.btnLevel.addChild(param1);
            param1.x = _loc3_;
            param1.y = _loc2_;
            MapListenerManager.add(param1,onSocksClick,"圣诞红袜");
            ++_sockNum;
            if(_sockNum < 3)
            {
               onMapChange();
            }
            else
            {
               _sockNum = 0;
            }
         });
      }
      
      private static function onSocksClick(param1:MouseEvent) : void
      {
         var mcloader:MCLoader = null;
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86065794);
         DisplayUtil.removeForParent(e.currentTarget as DisplayObject);
         if(socksMc == null)
         {
            mcloader = new MCLoader(ClientConfig.getActiveUrl("socksmc"),null,Loading.TITLE_AND_PERCENT,"加载..");
            mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
            {
               mcloader.removeEventListener(MCLoadEvent.SUCCESS,arguments.callee);
               socksMc = mcloader.loader.content["mc"];
               onSocksClick(e);
            });
            mcloader.doLoad();
            return;
         }
         MapManager.currentMap.topLevel.addChild(socksMc);
         socksMc.gotoAndPlay(1);
         AnimateManager.playMcAnimate(socksMc,0,"",function():void
         {
            socksMc.parent.removeChild(socksMc);
            ModuleManager.showModule(ClientConfig.getAppModule("SocksRwardPanel"));
         });
      }
   }
}

package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PeerlessAdorablePetController
   {
      
      private static var mcBoss:MovieClip;
       
      
      public function PeerlessAdorablePetController()
      {
         super();
      }
      
      public static function playAnim() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("peerless_adorable_pet"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.hideMapAllPlayerAndMonster();
            ToolBarController.panel.hide();
            ToolBarController.showOrHideAllUser(false);
            LevelManager.iconLevel.visible = false;
            MapManager.currentMap.controlLevel.addChild(mc);
            MapObjectControl.hideOrShowAllObjects(false);
            AnimateManager.playMcAnimate(mc,1,"mc",function():void
            {
               NpcDialog.show(NPC.XUE_BA_ZHI_HUN,["我知道你们都有很强的潜力。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.XUE_BA_ZHI_HUN,["雷恩和火精灵王大人朝夕相处，更加懂得力量的运用。"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.XUE_BA_ZHI_HUN,["他跟你们年纪差不多，希望你们能和他好好相处，多多学习。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.XIAO_QIONG_HU,["恩恩，我们一定会的！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.XUE_BA_ZHI_HUN,["为了迎接它的到来，我决定举办一场盛宴。"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.LEI_XIAO_YI,["恩恩！吃吃吃！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.ZHU_XIAO_QUE,["你就知道吃，就知道玩……"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.XUE_BA_ZHI_HUN,["你们回去发动一下大家，我们多准备一些美食，不能怠慢了。"],["好的老师！没问题老师！"],[function():void
                                    {
                                       KTool.showMapAllPlayerAndMonster();
                                       ToolBarController.panel.show();
                                       ToolBarController.showOrHideAllUser(true);
                                       LevelManager.iconLevel.visible = true;
                                       DisplayUtil.removeForParent(mc);
                                       MapObjectControl.hideOrShowAllObjects(true);
                                       BitBuffSetClass.setState(22806,1,function():void
                                       {
                                          ModuleManager.showAppModule("PeerlessAdorablePetMainPanel");
                                       });
                                    }]);
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      public static function loadBoss(param1:uint, param2:Point, param3:int) : void
      {
         var loadComHandler:Function = null;
         var id:uint = param1;
         var pos:Point = param2;
         var index:int = param3;
         loadComHandler = function(param1:DisplayObject):void
         {
            var mcBoss:MovieClip = null;
            var mapId:int = 0;
            var onSwitchMap:Function = null;
            var dis:DisplayObject = param1;
            mcBoss = dis as MovieClip;
            if(mcBoss)
            {
               onSwitchMap = function(param1:MapEvent):void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
                  if(MapManager.currentMap.id != mapId)
                  {
                     destroy();
                  }
                  else
                  {
                     MapManager.currentMap.depthLevel.addChild(mcBoss);
                  }
               };
               mcBoss.gotoAndStop("down");
               mcBoss.addEventListener(Event.ENTER_FRAME,function():void
               {
                  var _loc2_:MovieClip = mcBoss.getChildAt(0) as MovieClip;
                  if(_loc2_)
                  {
                     _loc2_.gotoAndStop(1);
                     mcBoss.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  }
               });
               mcBoss.x = pos.x;
               mcBoss.y = pos.y;
               mcBoss.scaleX = 2;
               mcBoss.scaleY = 2;
               mcBoss.index = index;
               mcBoss.buttonMode = true;
               ToolTipManager.add(mcBoss,PetXMLInfo.getName(id));
               MapManager.currentMap.depthLevel.addChild(mcBoss);
               mcBoss.addEventListener(MouseEvent.CLICK,onClickBoss);
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
               mapId = int(MapManager.currentMap.id);
            }
         };
         var url:String = String(ClientConfig.getPetSwfPath(id));
         ResourceManager.getResource(url,loadComHandler,"pet");
      }
      
      protected static function onClickBoss(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:int = int(_loc2_.index);
         var _loc4_:Array = ["巧克利","丽丽苗","托普斯","铛铛"];
         FightManager.fightNoMapBoss(_loc4_[_loc3_],4321 + _loc3_);
      }
      
      public static function destroy() : void
      {
         if(mcBoss)
         {
            ToolTipManager.remove(mcBoss);
            mcBoss.removeEventListener(MouseEvent.CLICK,onClickBoss);
            mcBoss = null;
         }
      }
   }
}

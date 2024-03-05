package com.robot.app.mapProcess.active
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   
   public class SpecialPetActive
   {
      
      public static var _gaiya:Boolean = false;
      
      private static var _id:uint;
      
      private static var _point:Point;
      
      private static var _petMc:MovieClip;
      
      private static var _map:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function SpecialPetActive()
      {
         super();
      }
      
      private static function setup() : void
      {
         _map.add(419,new Point(520,220));
         _map.add(439,new Point(170,380));
         _map.add(459,new Point(100,300));
      }
      
      public static function show(param1:uint) : void
      {
         var id:uint = param1;
         if(id == 0)
         {
            return;
         }
         _id = id;
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onMapDestory);
         if(MapManager.currentMap)
         {
            loadPet();
         }
         else
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               loadPet();
            });
         }
      }
      
      private static function loadPet() : void
      {
         _point = _map.getValue(MapManager.currentMap.id);
         if(_point != null)
         {
            if(_id == 261)
            {
               _gaiya = true;
            }
            else
            {
               ResourceManager.getResource(ClientConfig.getPetSwfPath(_id),onLoadPet,"pet");
            }
         }
      }
      
      private static function onLoadPet(param1:DisplayObject) : void
      {
         _petMc = param1 as MovieClip;
         _petMc.x = _point.x;
         _petMc.y = _point.y;
         _petMc.buttonMode = true;
         (_petMc.getChildAt(0) as MovieClip).gotoAndStop(1);
         _petMc.addEventListener(MouseEvent.CLICK,onClick);
         ToolTipManager.add(_petMc,PetXMLInfo.getName(_id));
         MapManager.currentMap.depthLevel.addChild(_petMc);
         DepthManager.swapDepthAll(MapManager.currentMap.depthLevel);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         if(_id != 261)
         {
            PetFightModel.mode = PetFightModel.MULTI_MODE;
            PetFightModel.status = PetFightModel.FIGHT_WITH_NPC;
            PetFightModel.enemyName = PetXMLInfo.getName(_id);
            SocketConnection.send(CommandID.FIGHT_SPECIAL_PET);
         }
      }
      
      public static function fightWithGaiya() : void
      {
         var _loc1_:uint = uint(SystemTimerManager.sysDate.getDay());
         if(_loc1_ == 0 || _loc1_ == 2 || _loc1_ == 4)
         {
            NpcDialog.show(NPC.GAIYA,["我的目标是成为精灵战斗大师，我对战斗有着独特的见解，只有力量与智慧都达到一定的境界的对手才会得到我的认同。如果你以致命一击为终结技来战胜我，我就做你的伙伴！"],["我接受，一定要让你成为我的伙伴！","等我把精灵训练的更强后再来找你挑战。"],[startFightWithGaiya]);
         }
         if(_loc1_ == 1 || _loc1_ == 5)
         {
            NpcDialog.show(NPC.GAIYA,["我的目标是成为精灵战斗大师，我对战斗有着独特的见解，只有力量与智慧都达到一定的境界的对手才会得到我的认同。如果你能以1对1的形式并在两回合内战胜我，我就做你的伙伴！"],["我接受，一定要让你成为我的伙伴！","等我把精灵训练的更强后再来找你挑战。"],[startFightWithGaiya]);
         }
         if(_loc1_ == 3 || _loc1_ == 6)
         {
            NpcDialog.show(NPC.GAIYA,["我的目标是成为精灵战斗大师，我对战斗有着独特的见解，只有力量与智慧都达到一定的境界的对手才会得到我的认同。如果你能抵挡住我10次进攻后战胜我，我就做你的伙伴！"],["我接受，一定要让你成为我的伙伴！","等我把精灵训练的更强后再来找你挑战。"],[startFightWithGaiya]);
         }
      }
      
      private static function startFightWithGaiya() : void
      {
         getDefinitionByName("com.robot.app2.control.BossReductionController").fightBoss(PetXMLInfo.getName(_id),0);
      }
      
      public static function onMapDestory(param1:MapEvent) : void
      {
         _gaiya = false;
         _point = null;
         if(_petMc)
         {
            ToolTipManager.remove(_petMc);
            _petMc.removeEventListener(MouseEvent.CLICK,onClick);
            _petMc = null;
         }
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,onMapDestory);
         ResourceManager.cancelURL(ClientConfig.getPetSwfPath(_id));
      }
   }
}

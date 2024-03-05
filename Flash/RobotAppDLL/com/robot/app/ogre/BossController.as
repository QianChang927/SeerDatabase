package com.robot.app.ogre
{
   import com.robot.app.spt.FightBossController;
   import com.robot.core.config.xml.OgreXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.mode.BossModel;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   
   public class BossController
   {
      
      private static var D_MAX:int = 60;
      
      private static var _list:HashMap;
      
      private static var _isSwitching:Boolean = false;
      
      private static var _currObj:BossModel;
      
      private static var _idList:HashMap = new HashMap();
       
      
      public function BossController()
      {
         super();
      }
      
      public static function getRegion(param1:uint) : uint
      {
         return _idList.getValue(param1);
      }
      
      public static function add(param1:uint, param2:uint, param3:uint, param4:int) : void
      {
         var _loc6_:BossModel = null;
         var _loc7_:BossModel = null;
         if(_isSwitching)
         {
            return;
         }
         if(_list == null)
         {
            _list = new HashMap();
            MapManager.addEventListener(MapEvent.MAP_SWITCH_OPEN,onMapSwitchOpen);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchComplete);
            MapManager.addEventListener(MapEvent.MAP_DESTROY,onMapSwitchOpen);
            MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
         }
         _idList = new HashMap();
         _idList.add(param1,param2);
         var _loc5_:Array;
         if(_loc5_ = OgreXMLInfo.getBossList(MainManager.actorInfo.mapID,param2))
         {
            if(param4 >= _loc5_.length)
            {
               return;
            }
            if(_list.containsKey(param2))
            {
               if(_loc7_ = _list.getValue(param2) as BossModel)
               {
                  if(_loc7_.id == param1)
                  {
                     _loc7_.show(_loc5_[param4],param3);
                     return;
                  }
                  _loc7_.removeEventListener(RobotEvent.OGRE_CLICK,onClick);
                  _loc7_.destroy();
                  _loc7_ = null;
               }
            }
            (_loc6_ = new BossModel(param1,param2)).addEventListener(RobotEvent.OGRE_CLICK,onClick);
            _loc6_.show(_loc5_[param4],param3);
            _list.add(param2,_loc6_);
         }
      }
      
      public static function remove(param1:uint) : void
      {
         if(_list == null)
         {
            return;
         }
         var _loc2_:BossModel = _list.remove(param1) as BossModel;
         if(_loc2_)
         {
            _loc2_.removeEventListener(RobotEvent.OGRE_CLICK,onClick);
            _loc2_.destroy();
            _loc2_ = null;
         }
      }
      
      public static function destroy() : void
      {
         var _loc2_:BossModel = null;
         MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,onMapDown);
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
         var _loc1_:Array = _list.getValues();
         for each(_loc2_ in _loc1_)
         {
            _loc2_.removeEventListener(RobotEvent.OGRE_CLICK,onClick);
            _loc2_.destroy();
            _loc2_ = null;
         }
         _list = null;
      }
      
      private static function startFight(param1:BossModel) : Boolean
      {
         var _loc2_:Array = null;
         var _loc3_:PetInfo = null;
         if(Point.distance(param1.pos,MainManager.actorModel.pos) < D_MAX)
         {
            if(PetManager.length == 0)
            {
               Alarm.show("你没有可出战的精灵哦！");
               return true;
            }
            _loc2_ = PetManager.infos;
            for each(_loc3_ in _loc2_)
            {
               if(_loc3_.hp > 0)
               {
                  MainManager.actorModel.stop();
                  getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
                  FightBossController.fightBoss("蘑菇怪");
                  return true;
               }
            }
            Alarm.show("你没有可出战的精灵哦！");
            return true;
         }
         return false;
      }
      
      private static function onClick(param1:RobotEvent) : void
      {
         _currObj = param1.currentTarget as BossModel;
         if(_currObj.hp <= 0)
         {
            if(startFight(_currObj))
            {
               _currObj = null;
               return;
            }
         }
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
         MainManager.actorModel.walkAction(_currObj.pos);
      }
      
      private static function onEnter(param1:Event) : void
      {
         if(_currObj)
         {
            if(_currObj.hp <= 0)
            {
               if(startFight(_currObj))
               {
                  _currObj = null;
                  onMapDown(null);
                  return;
               }
            }
         }
      }
      
      private static function onMapDown(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onEnter);
      }
      
      private static function onMapSwitchOpen(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_OPEN,onMapSwitchOpen);
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,onMapSwitchOpen);
         _isSwitching = true;
         destroy();
      }
      
      private static function onMapSwitchComplete(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchComplete);
         _isSwitching = false;
      }
   }
}

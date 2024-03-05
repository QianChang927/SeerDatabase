package com.robot.app.ogre
{
   import com.robot.app.automaticFight.AutomaticFightManager;
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class OgreCmdListener extends BaseBean
   {
       
      
      public function OgreCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.MAP_OGRE_LIST,this.onOgreList);
         finish();
      }
      
      private function onOgreList(param1:SocketEvent) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:Object = null;
         if(!MapManager.isInMap || MapManager.currentMap && MapManager.currentMap.id > 10000 && MapManager.currentMap.id < 50000)
         {
            return;
         }
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:Array = [];
         var _loc4_:int = 0;
         for(; _loc4_ < 9; _loc4_++)
         {
            if((_loc5_ = _loc2_.readUnsignedInt()) == 133)
            {
               if(!MainManager.actorModel.nono)
               {
                  continue;
               }
            }
            if(_loc5_)
            {
               OgreController.add(_loc4_,_loc5_);
               _loc3_.push({
                  "_id":_loc5_,
                  "_index":_loc4_
               });
            }
            else
            {
               OgreController.remove(_loc4_);
            }
         }
         if(_loc3_.length > 0)
         {
            _loc6_ = _loc3_[Math.floor(Math.random() * _loc3_.length)];
            AutomaticFightManager.beginFight(_loc6_._index,_loc6_._id);
         }
      }
   }
}

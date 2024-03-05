package com.robot.app.ogre
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class BossCmdListener extends BaseBean
   {
       
      
      public function BossCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.MAP_BOSS,this.onBossList);
         finish();
      }
      
      private function onBossList(param1:SocketEvent) : void
      {
         var id:uint = 0;
         var region:uint = 0;
         var hp:uint = 0;
         var pos:uint = 0;
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         var len:uint = data.readUnsignedInt();
         var i:int = 0;
         while(i < len)
         {
            id = data.readUnsignedInt();
            region = data.readUnsignedInt();
            hp = data.readUnsignedInt();
            pos = data.readUnsignedInt();
            if(pos == 200)
            {
               BossController.remove(region);
            }
            else if(MapManager.currentMap)
            {
               if(MapManager.currentMap.id == 12)
               {
                  if(TasksManager.getTaskStatus(532) != TasksManager.ALR_ACCEPT)
                  {
                     BossController.add(id,region,hp,pos);
                  }
                  else
                  {
                     TasksManager.getProStatusList(532,function(param1:Array):void
                     {
                        if(param1[0])
                        {
                           BossController.add(id,region,hp,pos);
                        }
                     });
                  }
               }
               else
               {
                  BossController.add(id,region,hp,pos);
               }
            }
            else
            {
               BossController.add(id,region,hp,pos);
            }
            i++;
         }
      }
   }
}
